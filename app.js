require('dotenv').config();
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  res.send('Hello Friend End!')
});

app.listen(process.env.PORT, process.env.HOST);