const express = require('express');
const {
  getArticles,
  getArticleById,
  getFilteredArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articles-controller');
const {
  adminProtect,
} = require('../middleware/articles-middleware');

// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/').get(getArticles).post(createArticle);
router.route('/:id').get(getArticleById).put(updateArticle).delete(deleteArticle);
router.route('/tags/:tag').get(getFilteredArticles);
router.route('/create').post(adminProtect, createArticle);
router.route('/delete/:id').delete(adminProtect, deleteArticle);
router.route('/update/:id').put(adminProtect, updateArticle);

module.exports = router;
