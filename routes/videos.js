import { Router } from 'express';
import { getAllVideos } from '../controllers/videoController.js';

const videoRoutes = Router();

// Get all videos
videoRoutes.get('/all', getAllVideos);

export default videoRoutes;
