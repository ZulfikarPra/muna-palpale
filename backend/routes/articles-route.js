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
const upload = require('../helpers/dataHelper');

// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/').get(getArticles);
router.route('/:id').get(getArticleById);
router.route('/tags/:tag').get(getFilteredArticles);
router.route('/create').post(upload.array('photos'), createArticle);

router.route('/delete/:id').delete(deleteArticle);
router.route('/update/:id').put(updateArticle);

module.exports = router;
