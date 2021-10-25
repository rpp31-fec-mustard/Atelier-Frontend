const express = require('express');
const parser = require('body-parser');
const app = express();
const helpers = require('./apiHelper.js')

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());

app.get('/getReviews', (req, res) => {
  let id = req.query.id;
  let sort = req.query.sort;
  helpers.getReviews(id, sort, (err, result) => {
    if (err) {
      res.status(500).end();
    } else {
      res.status(200).send(result);
    }
  });
});

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});