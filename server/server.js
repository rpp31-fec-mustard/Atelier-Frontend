const express = require('express');
const parser = require('body-parser');
var compression = require('compression');
const api = require('./apiHelpers.js');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());
app.use(compression());


app.get('/product', (req, res) => {
  let productId = req.query.productId;
  api.getProduct(productId)
    .then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      console.log('Server error: get /product', error);
      res.status(500).send(error).end();
    });
});

app.get('/product/styles', (req, res) => {
  let productId = req.query.productId;
  api.getProductStyles(productId)
    .then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      console.log('Server error: get /product/styles', error);
      res.status(500).send(error).end();
    });
});

app.get('/getReviews', (req, res) => {
  let id = req.query.productId;
  let sort = req.query.sort;
  api.getReviews(id, sort).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    console.log('Server error: get /getReviews', error);
    res.status(500).send(error).end();
  });
});

app.post('/related', (req, res) => {
  api.getRelated(req.body.productId)
    .then((relatedList) => {
      res.status(200).send(relatedList);
    })
    .catch((error) => {
      console.log('Server error: post /related', error);
      res.status(500).send(error).end();
    });
});

app.post('/getRating', (req, res) => {
  api.getRating(req.body.productId)
    .then((rating) => {
      res.status(200).send(rating.toString());
    }).catch((error) => {
      console.log('Server error: post /getRating', error);
      res.status(500).send(error).end();
    });
});

app.get('/questions', (req, res) => {
  api.getQuestions(req.query.productId)
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.log('Server error: get /questions', error);
      res.status(500).send(error).end();
    });
});

app.post('/interactions', (req, res) => {
  api.postInteraction(req.body)
    .then((status) => {
      res.send(status);
    })
    .catch((error) => {
      console.log('Server error: post /interations', error);
      res.status(500).send(error).end();
    });
});

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {
  app: app
};