import { Router } from 'express';
import { getAllArticles, getarticle } from '../controllers/articleController.js';

const articleRoutes = Router();

// Get all articles
articleRoutes.get('/allarticles', getAllArticles);
articleRoutes.get('/article/:title', getarticle);

export default articleRoutes;
