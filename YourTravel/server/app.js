require('dotenv').config();
const express = require('express');
const app = express();
const Database = require('./database');
const Campground = require('./models/campground.model');

const port = process.env.PORT || 3002;

app.get('/api', async (req, res) => {
    const camps = await Campground.find({});
    res.json({ camps });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
