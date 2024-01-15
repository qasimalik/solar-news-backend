import { Router } from 'express';
import { adminLogin, adminSignup, postArticleByAdmin, postVideoByAdmin } from '../../controllers/adminController.js';

const adminRoutes = Router();

// Admin login
adminRoutes.post('/login', adminLogin);
adminRoutes.post('/signup', adminSignup);

// Admin routes for posting articles and videos
adminRoutes.post('/article', postArticleByAdmin);
adminRoutes.post('/video', postVideoByAdmin);

export default adminRoutes;
