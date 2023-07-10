const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const dbCon = require('./config/mongodb');
const app = express();
dbCon();

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
