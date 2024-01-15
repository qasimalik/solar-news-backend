import { Router } from 'express';
import { submitFeedback } from '../controllers/feedbackController.js';

const feedbackRoutes = Router();

// Submit feedback
feedbackRoutes.post('/', submitFeedback);

export default feedbackRoutes;
