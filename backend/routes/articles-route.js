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

router.route('/create').post(upload.array('photos'), async (req, res) => {
  try {
    // Implement this on FE with FormData
    const picturesURL = [];
    console.log(req.files);
    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];
      if (file.size > (1024 * 1024 * 8)) {
        res.status(400).json({'message': 'File too large'});
        return;
      };
      const dataURI = 'data:' + file.mimetype + ';base64,' + file.buffer.toString('base64');
      picturesURL.push(await handleUpload(dataURI));
    }
    const article = await createArticle(
      req.body.title,
      req.body.content,
      req.body.tags,
      picturesURL,
    );
    res.status(200).json(article);
  } catch (err) {
    console.log(err);
  }
}, createArticle);

router.route('/delete/:id').delete(deleteArticle);
router.route('/update/:id').put(updateArticle);

module.exports = router;
