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
  const {
    title,
    content,
    tags,
    picture,
  } = req.body;

  const images = req.files;

  const pointImage = images['photos'];
  console.log(pointImage);

  const article = await Article.create({
    title,
    content,
    tags,
    picture,
  });

  if (article) {
    res.status(201).json({
      _id: article._id,
      title: article.title,
      content: article.content,
      tags: article.tags,
      picture: article.picture,
    });
  }
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

// eslint-disable-next-line require-jsdoc
async function handleUpload(file) {
  //console.log(file);
  const uploadResponse = await cloudinary.uploader.upload(file, {
    resource_type: 'image',
  });
  console.log(uploadResponse);
}

module.exports = {
  getArticles,
  getArticleById,
  getFilteredArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  handleUpload,
};
