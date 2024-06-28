const express = require('express');
const { startTimer } = require('../model/start');

const router = express.Router();

router.get('/', (req, res, next) => {
  startTimer();
  res.send("Time has been started!");
});

module.exports = router;