const express = require('express');
const {
  getArticles,
  getArticleById,
  getFilteredArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  handleUpload,
} = require('../controllers/articles-controller');

const {
  adminProtect,
} = require('../middleware/articles-middleware');
const upload = require('../helpers/dataHelper');

// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/').get(getArticles).post(createArticle);
router.route('/:id').get(getArticleById).put(updateArticle).delete(deleteArticle);
router.route('/tags/:tag').get(getFilteredArticles);

router.route('/create').post(upload.single('photos'), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
    await handleUpload(dataURI);
  } catch (err) {
    console.log(err);
  }
}, createArticle);

router.route('/delete/:id').delete(deleteArticle);
router.route('/update/:id').put(updateArticle);

module.exports = router;
