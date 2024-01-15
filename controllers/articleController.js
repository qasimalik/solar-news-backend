import article from '../models/article.js';

// Get all articles
export async function getAllArticles(req, res) {
  try {
    const articles = await article.find();
    console.log(articles);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// get a single article
export async function getarticle(req, res) {
  console.log(req.params)
  try {
    const { title } = req.params;
    const singlearticle = await article.findOne({title: title});
    console.log(req.params);
    console.log(singlearticle);
    res.json(singlearticle);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

