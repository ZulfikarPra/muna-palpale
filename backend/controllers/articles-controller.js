const asyncHandler = require('express-async-handler');
const Article = require('../models/articles-model');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});
  res.json(articles);
});

const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

const getFilteredArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({
    tags: req.params.tag,
  });
  if (articles) {
    res.json(articles);
  } else {
    res.status(404);
    throw new Error('Articles not found');
  }
});

const createArticle = asyncHandler(async (req, res) => {
  console.log(req.files);
  console.log(req.body);
  const pictureURL = [];
  try {
    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];
      if (file.size > (1024 * 1024 * 8)) {
        res.status(400).json({'message': 'File too large'});
        return;
      }
      const dataURI = 'data:' + file.mimetype + ';base64,' + file.buffer.toString('base64');
      const uploadResponse = await cloudinary.uploader.upload(dataURI, {
        resource_type: 'image',
      });
      pictureURL.push(uploadResponse.url);
    }
  } catch (error) {
    res.status(400).json({'message': error.message});
  }
  const article = await Article.create({
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
    picture: pictureURL,
  });
  res.status(200).json(article);
});

const updateArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    article.title = req.body.title || article.title;
    article.content = req.body.content || article.content;
    article.tags = req.body.tags || article.tags;
    article.picture = req.body.picture || article.picture;

    const updatedArticle = await article.save();

    res.json({
      _id: updatedArticle._id,
      title: updatedArticle.title,
      content: updatedArticle.content,
      tags: updatedArticle.tags,
      picture: updatedArticle.picture,
    });
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    await article.remove();
    res.json({message: 'Article removed'});
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

module.exports = {
  getArticles,
  getArticleById,
  getFilteredArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
