const axios = require('axios');
const config = require('../config.js');


//testing
const getProduct = (productId, cb) => {
  console.log('productId :', typeof productId, productId);

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, {
    headers: {
      Authorization: `${config.key}`
    }
  })
    .then((result) => {
      console.log('@APIH: ', result.data);
      cb(null, result.data);
    })
    .catch((err) => {
      console.log('\x1b[31m' + '@APIH Error' + '\x1b[0m');
      cb(err);
      // console.log('@APIH Error: ', err);
    });
};


const getReviewMeta = (id, callback) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`,
    headers: {
      Authorization: `${config.key}`,
    },
    method: 'get',
  };
  axios
    .request(options)
    .then((result) => {
      callback(null, result.data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getRating = (productId) => {
  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&count=100`,
      {
        headers: { Authorization: `${config.key}` },
      }
    ) // returns a PROMISE that resolves in an average rating of a product
    .then((result) => {
      const reviews = result.data.results;
      if (reviews.length) {
        let ratingSum = reviews.reduce((previousVal, currentVal) => {
          return previousVal + currentVal.rating;
        }, 0);

        const avgRating = ratingSum / reviews.length;

        return avgRating;
      }
      // in the case where product have no reviews
      return 0;
    });
};

const getRelated = (productId) => {
  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`,
      { headers: { Authorization: `${config.key}` }, }
    ) // gets list of related prodIds
    .then((response) => {
      const relatedProdIds = response.data;
      let relatedPromise = Promise.all(
        relatedProdIds.map((productId) => {
          return axios
            .get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
              {
                headers: { Authorization: `${config.key}` },
              }
            ) // gets productInfo for each product
            .then((productInfo) => {
              return getRating(productId).then((rating) => {
                const id = productInfo.data.id;
                const category = productInfo.data.category;
                const name = productInfo.data.name;

                return { id, category, name, rating };
              });
            })
            .catch((error) => {
              throw error;
            });
        })
      );
      return relatedPromise;
    })
    .then((relatedList) => {
      return relatedList;
    });
};

const getReviews = (id, sort, callback) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${id}&sort=${sort}&count=100`,
    headers: {
      Authorization: `${config.key}`,
    },
    method: 'get',
  };
  axios
    .request(options)
    .then((result) => {
      var resultObj = {
        reviewsArr: result.data.results,
      };
      getReviewMeta(id, (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          resultObj.meta = result;
          callback(null, resultObj);
        }
      });
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
      return results.data.results;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  getProduct: getProduct,
  getRelated: getRelated,
  getReviews: getReviews,
  getQuestions: getQuestions,
  getRating: getRating
};
