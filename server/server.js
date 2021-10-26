const express = require('express');
const parser = require('body-parser');
const api = require('./apiHelpers.js');
const app = express();
const helpers = require('./apiHelper.js')

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());

<<<<<<< HEAD
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
=======
app.get('/related', (req, res) => {
  api.parseRelated('59553')
    .then((related) => {
      console.log('server', {related})
      res.send('RELATED');
    })
>>>>>>> main
});

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});