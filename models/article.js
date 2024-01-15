import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  photo: String,
  tags: [String],
  createdAt: Date, 
});

const article = mongoose.model('article', articleSchema);

export default article;
