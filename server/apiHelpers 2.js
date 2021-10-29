const axios = require('axios');
const config = require('../config.js');

function parseRelated(productId) {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`, {
    headers: {
      'Authorization': `${config.key}`
    }
  })
    .then((response) => {
      const relatedProdIds = response.data;
      console.log('apiHelper', {relatedProdIds});
    })
};


const getReviews = (id, sort, callback) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/',
    headers: {
      'Authorization': `${config.key}`
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
      var resultObj = {
        reviewsArr: result.data.results
      };
      getReviewMeta(id, (err, result) => {
       if (err) {
         callback(err, null)
       } else {
         resultObj.meta = result
         callback(null, resultObj)
       }
      })
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getReviewMeta = (id, callback) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/',
    headers: {
      'Authorization': `${config.key}`
    },
    params: {
      product_id: id,
    },
    method: 'get',
  };
  axios.request(options)
    .then((result) => {
      callback(null, result.data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports.parseRelated = parseRelated;
module.exports.getReviews = getReviews;