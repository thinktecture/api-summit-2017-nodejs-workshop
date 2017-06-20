'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 9090;

app.use(express.static('dist'));

app.listen(port, () => console.log('Up & running'));
