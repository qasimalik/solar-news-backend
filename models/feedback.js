import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
});

const feedback = model('feedback', feedbackSchema);
export default feedback;
