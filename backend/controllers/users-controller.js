const asyncHandler = require('express-async-handler');
const User = require('../models/users-model');
const generateToken = require('../utils/generateToken');

const register = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;

  const exist = await User.findOne({email});

  if (exist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const auth = asyncHandler(async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = {
  register,
  auth,
};
