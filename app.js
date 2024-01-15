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
  const allowedOrigins = "*";
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","*");
  res.header("Access-Control-Allow-Credentials", true);
  next();

};

app.use(corsPolicy)

app.use(bodyParser.json({limit: '35mb'}));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 500000,
  }),
);

app.use('/', (req, res) => {
  res.send('Welcome to the backend of the website');
});
app.use('/admin', adminRoutes);
app.use('/articles', articleRoutes);
app.use('/feedbacks', feedbackRoutes);
app.use('/videos', videoRoutes);

export default app;