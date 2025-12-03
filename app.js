'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 20101;
const name = process.env.NAME || "کاربر";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/name', (req, res) => {
    res.json({ name });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});
