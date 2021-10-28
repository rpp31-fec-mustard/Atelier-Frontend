const axios = require('axios');
const config = require('../config.js');

const parseRelated = (productId) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`, {
    headers: {'Authorization': `${config.key}`}
  })
    .then((response) => {
      const relatedProdIds = response.data;
      let relatedPromise = Promise.all(relatedProdIds.map((productId) => {
        // create an array of promises
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, {
          headers: {'Authorization': `${config.key}`}
        })
        .then((productInfo) => {
          return getRating(productId)
            .then((rating) => {
              const id = productInfo.data.id;
              const category = productInfo.data.category;
              const name = productInfo.data.name;

              return ({id, category, name, rating});
            })
        })
        .catch((error) => {
          throw error;
        });
      }));

      return relatedPromise;
    })
    .then((relatedList) => {
      return relatedList;
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

const getQuestions = (productId) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=100`, {
    headers: {
      'Authorization': `${config.key}`
    }
  })
    .then((results) => {
      return results.data.results
    })
    .catch((err) => {
      return err
    })
}

module.exports = {
  parseRelated: parseRelated,
  getReviews: getReviews,
  getQuestions: getQuestions
}
