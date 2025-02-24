const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/ai.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/ai', aiRoutes);

module.exports = app;