const express = require('express');
const parser = require('body-parser');
const api = require('./apiHelpers.js');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());

app.get('/related', (req, res) => {
  api.parseRelated('59553')
    .then((related) => {
      console.log('server', {related})
      res.send('RELATED');
    })
});

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});