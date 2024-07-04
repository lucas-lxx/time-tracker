const express = require('express');
const path = require('path');

const { startTimer } = require('../model/start');

const router = express.Router();

router.post('/start-timer', async (req, res, next) => {
  startTimer();
  res.status(200).redirect('/');
});

router.get('/', async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'start.html'));
})

module.exports = router;