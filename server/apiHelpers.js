const axios = require("axios");
const config = require("../config.js");

const parseRelated = (productId) => {
  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`, {
        headers: {
          Authorization: `${config.key}`
        },
      }
    ) // gets list of related prodIds
    .then((response) => {
      const relatedProdIds = response.data;
      let relatedPromise = Promise.all(
        relatedProdIds.map((productId) => {
          return axios
            .get(
              `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, {
                headers: {
                  Authorization: `${config.key}`
                },
              }
            ) // gets productInfo for each product
            .then((productInfo) => {
              return getRating(productId).then((rating) => {
                const id = productInfo.data.id;
                const category = productInfo.data.category;
                const name = productInfo.data.name;

                return {
                  id,
                  category,
                  name,
                  rating
                };
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
    .catch((err) => {
      return err;
    })
};

const getReviewMeta = (id) => {
  let options = {
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/",
    headers: {
      Authorization: `${config.key}`,
    },
    params: {
      product_id: id,
    },
    method: "get",
  };
  return axios.request(options).then((result) => {
    return result.data;
  }).catch((err) => {
    return err;
  });
};

const getReviews = (id, sort) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/',
    headers: {
      Authorization: `${config.key}`,
    },
    params: {
      product_id: id,
      sort: sort,
      count: 100,
    },
    method: 'get',
  };
  return axios.request(options).then((result) => {
    var reviewsObj = {
      reviewsArr: result.data.results,
    };
    return getReviewMeta(id).then((meta) => {
      reviewsObj.meta = meta;
      return reviewsObj;
    });
  })
    .catch((err) => {
      return err;
    });
};

const putReviewHelpfullness = (id, callback) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/:review_id/helpful',
    headers: {
      'Authorization': `${config.key}`
    },
    params: {
      review_id: id,
    },
    method: 'put',
  };
  axios.request(options)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};


const getRating = (productId) => {
  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&count=100`, {
        headers: {
          Authorization: `${config.key}`
        },
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
    })
    .catch((err) => {
      return err;
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
  parseRelated: parseRelated,
  getReviews: getReviews,
  getQuestions: getQuestions,
  getRating: getRating,
  putReviewHelpfullness: putReviewHelpfullness,
};