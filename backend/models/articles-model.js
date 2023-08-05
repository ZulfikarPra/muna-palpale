const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const articleSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  picture: {
    type: Array,
  },
}
, {
  timeStamps: true,
},
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
