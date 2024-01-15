import video from '../models/video.js';

// Get all videos
export async function getAllVideos(req, res) {
    try {
      const videos = await video.find();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
