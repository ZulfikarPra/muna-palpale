const jwt = require('jsonwebtoken');
const user = require('../models/users-model');
const asyncHandler = require('express-async-handler');

const adminProtect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await user.findById(decoded.id).select('-password');

      admin = req.user.isAdmin;

      if (admin == 'master') {
        res.status(401);
        throw new Error('Not authorized as an admin!');
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = {adminProtect};
