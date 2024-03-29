import express from "express";
import { config } from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes/admin.js";
import articleRoutes from "./routes/articles.js";
import feedbackRoutes from "./routes/feedbacks.js";
import videoRoutes from "./routes/videos.js";
import bodyParser from "body-parser";

config();

const app = express();

const whitelist = "*";
const corsOptions = {
  origin: whitelist,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "35mb" }));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "35mb",
    parameterLimit: 500000,
  })
);

app.use("/admin", adminRoutes);
app.use("/articles", articleRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/videos", videoRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the backend of the website");
});

export default app;
