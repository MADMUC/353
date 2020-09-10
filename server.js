'use strict';

// load package
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/end', (req, res) => {
    res.send('bye');
    process.exit();
});

app.listen(PORT, HOST);

console.log(`Running on http:// ${HOST}: ${PORT}`);

