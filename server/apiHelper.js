const axios = require('axios');

const getReviews = (id, sort, callback) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/',
    headers: {
      'Authorization': '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'
    },
    params: {
      product_id: id,
      sort: sort,
      count: 100
    },
    method: 'get',
  };
  axios.request(options)
    .then((result) => {
      callback(null, result.data.results);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  getReviews
};