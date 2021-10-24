const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(parser.json());

const port = 5500;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});