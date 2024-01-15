import article from "../models/article.js";
import video from "../models/video.js";
import Admin from "../models/admin.js";

// Post a new article by the admin
export async function postArticleByAdmin(req, res) {
  try {
    const { title, content, photo, tags } = req.body;
    const newArticle = new article({
      title,
      content,
      tags,
      photo,
      createdAt: new Date(),
    });
    await newArticle.save();
    res.json({ success: true, article: newArticle });
    console.log(newArticle);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
}

// Post a new video by the admin
export async function postVideoByAdmin(req, res) {
  try {
    const { title, videoUrl } = req.body;
    const newVideo = new video({ title, videoUrl, createdAt: new Date() });
    await newVideo.save();
    res.json({ success: true, video: newVideo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
}

// Admin login
export async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (admin && password == admin.password) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Admin signup
export async function adminSignup(req, res) {
  try {
    // const { username, password } = req.body;
    const newAdmin = new Admin({ username: "kass", password: "solar123" });
    await newAdmin.save();
    res.json({ success: true, admin: newAdmin });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
