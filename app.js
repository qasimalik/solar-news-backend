import express from 'express';
import{ config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes/admin.js';
import articleRoutes from './routes/articles.js';
import feedbackRoutes from './routes/feedbacks.js';
import videoRoutes from './routes/videos.js';
import bodyParser from 'body-parser';
config();
const app = express();

app.use(cors({origin: 'http://localhost:3000', credentials: true}))

app.use(bodyParser.json({limit: '35mb'}));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 500000,
  }),
);

app.use('/admin', adminRoutes);
app.use('/articles', articleRoutes);
app.use('/feedbacks', feedbackRoutes);
app.use('/videos', videoRoutes);

export default app;