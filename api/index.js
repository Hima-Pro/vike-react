const app = require('express')();

app.get('/api/:slug', (req, res) => {
  res.json(req.headers);
});

module.exports = app;