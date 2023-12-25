import express from "express";

const app = express();

app.get('/api/:slug', (req, res) => {
  res.json(req.headers);
});

module.exports = app;