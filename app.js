require('dotenv').config();
const express = require('express');

const start_router = require('./router/start');

const app = express();

app.use('/start-timer', start_router);

app.listen(process.env.PORT, process.env.HOST);