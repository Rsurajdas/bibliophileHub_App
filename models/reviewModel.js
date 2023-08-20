import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const reviewSchema = new Schema({
  review: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  book: {
    type: ObjectId,
    ref: 'Book',
    require: [true, 'Review must belong to a book'],
  },
  user: {
    type: ObjectId,
    ref: 'User',
    require: [true, 'Review must belong to a user'],
  },
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

const Review = model('Review', reviewSchema);

export default Review;
