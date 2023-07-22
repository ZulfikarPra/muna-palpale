const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const dbCon = require('./config/mongodb');

const userRoutes = require('./routes/users-route');
const articlesRoutes = require('./routes/articles-route');

const app = express();
dbCon();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/articles', articlesRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
