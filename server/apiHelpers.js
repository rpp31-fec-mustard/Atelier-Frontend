const axios = require('axios');
const config = require('../config.js');

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
      { headers: { Authorization: `${config.key}` } }
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

const getPrimaryStyle = (productId) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
    { headers: { Authorization: `${config.key}` } })
    .then((response) => {
      const primaryStyle = response.data.results[0];
      return primaryStyle;
    })
    .catch((error) => {
      throw error;
    });
};

const getRelated = (productId) => {
  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`,
      { headers: { Authorization: `${config.key}` } }
    ) // gets list of related prodIds
    .then((response) => {
      const relatedProdIds = response.data;
      let relatedPromise = Promise.all(
        relatedProdIds.map((productId) => {
          return axios
            .get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
              { headers: { Authorization: `${config.key}` } }
            ) // gets productInfo for each product
            .then((productInfo) => {
              return getRating(productId).then((rating) => {
                return {productInfo: productInfo.data, rating: rating};
              }) // gets rating
                .then((productInfo) => {
                  return getPrimaryStyle(productInfo.productInfo.id).then((primaryStyle) => {
                    const id = productInfo.productInfo.id;
                    const category = productInfo.productInfo.category;
                    const name = productInfo.productInfo.name;
                    const rating = productInfo.rating;
                    const thumbnailUrl = primaryStyle.photos[0].thumbnail_url;
                    const price = primaryStyle.sale_price ? primaryStyle.sale_price : primaryStyle.original_price;
                    return { id, category, name, rating, thumbnailUrl, price};
                  }); // consolidates and returns all product information including thumbnail url and price
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
    })
    .catch((error) => {
      throw error;
    });
};

const getReviews = (id, sort, callback) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${id}&sort=${sort}&count=100`,
    headers: { Authorization: `${config.key}` },
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
  getRelated: getRelated,
  getReviews: getReviews,
  getQuestions: getQuestions,
  getRating: getRating
};
