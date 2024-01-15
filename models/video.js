import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  title: String,
  videoUrl: String,
  createdAt: Date,
});

const video = model('video', videoSchema);
export default video;