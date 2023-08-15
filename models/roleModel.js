import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
  roleId: {
    type: Number,
    require: true,
  },
  roleName: {
    type: String,
    require: true,
    unique: true,
  },
});

const Role = model('Role', roleSchema);

export default Role;
