import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = model('Admin', adminSchema);

export default Admin;
