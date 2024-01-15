import { Router } from 'express';
import { submitFeedback, getFeedback } from '../controllers/feedbackController.js';

const feedbackRoutes = Router();

// Submit feedback
feedbackRoutes.post('/', submitFeedback);
feedbackRoutes.get('/feedback', getFeedback);


export default feedbackRoutes;
