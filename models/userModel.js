import crypto from 'crypto';
import { Schema, model } from 'mongoose';
import Shelf from './shelfModel';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: [true, 'Please provide a email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  photo: {
    type: String,
    default: '/assets/image/user/default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'author', 'admin'],
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    require: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  friends: [{ type: ObjectId, ref: 'User' }],
  followers: [{ type: ObjectId, ref: 'User' }],
  following: [{ type: ObjectId, ref: 'User' }],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordTokenExpireAt: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function () {
  this.find({ active: { $ne: false } });
});

userSchema.post('save', async function (doc) {
  const defaultShelves = ['Read', 'Currently Reading', 'To Read'];

  for (const shelfName of defaultShelves) {
    await Shelf.create({
      shelf_name: shelfName,
      user: doc._id,
    });
  }
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JwtTimestamp) {
  if (this.passwordChangedAt) {
    const changeTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    return JwtTimestamp < changeTimestamp;
  }
  return false;
};

userSchema.methods.createPasswordRestToken = function () {
  const restToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(restToken)
    .digest('hex');

  this.passwordTokenExpireAt = Date.now() + 10 * 60 * 1000;

  return restToken;
};

const User = model('User', userSchema);

export default User;
