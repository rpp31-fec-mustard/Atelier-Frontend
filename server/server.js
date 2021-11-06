const express = require('express');
const parser = require('body-parser');
const api = require('./apiHelpers.js');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());



app.get('/product', (req, res) => {

  let productId = req.query.productId;
  api.getProduct(productId, (err, result) => {
    if (err) {
      console.log('Server error');
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/product/styles', (req, res) => {

  let productId = req.query.productId;
  api.getProductStyles(productId, (err, result) => {
    if (err) {
      console.log('Server error');
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/getReviews', (req, res) => {
  let id = req.query.productId;
  let sort = req.query.sort;
  api.getReviews(id, sort).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.sendStatus(500).end();
  });
});

app.post('/related', (req, res) => {
  api.getRelated(req.body.product)
    .then((relatedList) => {
      res.status(200).send(relatedList);
    })
    .catch((error) => {
      res.status(500).send(error).end();
    });
});

app.post('/getRating', (req, res) => {
  api.getRating(req.body.productId)
    .then((rating) => {
      res.status(200).send(rating.toString());
    }).catch((err) => {
      res.sendStatus(500).end();
    });
});


app.get('/questions', (req, res) => {
  api.getQuestions(req.query.productId)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500).end();
    });
});

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {
  app: app
};