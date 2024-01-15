import express from 'express';
import{ config } from 'dotenv';
import cors from 'cors';
import adminRoutes from './routes/adminRoutes/admin.js';
import articleRoutes from './routes/articles.js';
import feedbackRoutes from './routes/feedbacks.js';
import videoRoutes from './routes/videos.js';
import bodyParser from 'body-parser';
config();
const app = express();

const corsPolicy = (req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://solar-news-frontend.vercel.app/"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader('Content-Security-Policy', "default-src 'none'; font-src <URL>");
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, DELETE, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
  );
  return next();
};

app.use(corsPolicy);

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