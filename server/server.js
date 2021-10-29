const express = require('express');
const parser = require('body-parser');
const api = require('./apiHelpers.js');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());

app.get('/getReviews', (req, res) => {
  let id = req.query.id;
  let sort = req.query.sort;
  api.getReviews(id, sort, (err, result) => {
    if (err) {
      res.status(500).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/related', (req, res) => {
  api.parseRelated('59553')
    .then((relatedList) => {
      res.status(200).send(relatedList);
    })
    .catch((error) => {
      res.status(500).end();
    });
});

app.get('/getOverallRating', (req, res) => {
  api.getRating(req.query[0]).then((result) => {
    var obj = {
      rating: result
    }
    res.status(200).send(obj);
  })
  .catch((err) => {
    res.sendStatus(500).end()
  })
})


app.get('/questions', (req, res) => {
  api.getQuestions('59553')
    .then((results) => {
      res.send(results)
    })
    .catch((err) => {
      res.status(500).end();
    })
})

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
