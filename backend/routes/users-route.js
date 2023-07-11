const express = require('express');
const {
  register,
  auth,
} = require('../controllers/users-controller');
const {
  userProtect,
} = require('../middleware/users-middleware');

// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/register').post(register);
router.route('/auth').post(auth);

module.exports = router;
