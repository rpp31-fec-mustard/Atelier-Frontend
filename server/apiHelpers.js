const axios = require('axios');
const config = require('../config.js');

const auth = {headers: {Authorization: `${config.key}`} };


const getProduct = (productId) => {
  // console.log('productId :', typeof productId, productId);

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, auth)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log('API Helper getProduct error: ', error);
    });
};

const getProductStyles = (productId) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`, auth)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log('API Helper getProductStyles error: ', error);
    });
};


// returns a PROMISE that resolves in an average rating of a product
const getRating = (productId) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&count=100`, auth)
    .then((result) => {
      const reviews = result.data.results;
      if (reviews.length) {
        let ratingSum = reviews.reduce((ratingSum, currentReview) => {
          return ratingSum + currentReview.rating;
        }, 0);
        const avgRating = ratingSum / reviews.length;

        return avgRating;
      }
      // in the case where product has no reviews
      return 0;
    })
    .catch((error) => {
      console.log('API Helper getRating error: ', error);
    });
};

const getPrimaryStyle = (productId) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`, auth)
    .then((response) => {
      const primaryStyle = response.data.results[0];
      return primaryStyle;
    })
    .catch((error) => {
      console.log('API Helper getPrimaryStyle error: ', error);
    });
};

const getRelated = (productId) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`, auth)
    .then((response) => { // gets list of related prodIds
      const relatedProdIds = response.data;
      let relatedPromise = Promise.all(
        relatedProdIds.map((productId) => {
          return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, auth)
            .then((productInfo) => {
              return getPrimaryStyle(productInfo.data.id).then((styleInfo) => {
                const id = productInfo.data.id;
                const category = productInfo.data.category;
                const name = productInfo.data.name;
                const features = productInfo.data.features;
                const thumbnailUrl = styleInfo.photos[0].thumbnail_url;
                const defaultPrice = productInfo.data.default_price;
                const originalPrice = styleInfo.original_price;
                const salePrice = styleInfo.sale_price;
                const starred = false;
                return { id, category, name, features, thumbnailUrl, defaultPrice, originalPrice, salePrice, starred};
              }); // consolidates and returns all product information including thumbnail url and price
            })
            .catch((error) => {
              console.log('API Helper getRelated error at step getPrimaryStyle: ', error);
            });
        })
      );
      return relatedPromise;
    })
    .then((relatedList) => {
      return relatedList;
    })
    .catch((error) => {
      console.log('API Helper getRelated error at getting full related items list: ', error);
    });
};

const getReviewMeta = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${id}`, auth)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log('API Helper getReviewMeta error: ', error);
    });
};

const getReviews = (id, sort) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${id}&sort=${sort}&count=100`, auth)
    .then((result) => {
      var reviewsObj = {
        reviewsArr: result.data.results,
      };
      return getReviewMeta(id).then((meta) => {
        reviewsObj.meta = meta;
        return reviewsObj;
      });
    })
    .catch((error) => {
      console.log('API Helper getReviews error: ', error);
    });
};


const putReviewHelpfulness = (id) => {
  const options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${id}/helpful/`,
    headers: auth.headers
  };

  return axios(options)
    .then(() => { return; })
    .catch((error) => {
      console.log('API Helper putReviewHelpfulness error: ', error);
    });
};


const getQuestions = (productId) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=100`, auth)
    .then((results) => {
      return results.data.results;
    })
    .catch((error) => {
      console.log('API Helper getQuestions error: ', error);
    });
};

const postInteraction = (body) => {
  const options = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    data: body,
    headers: auth.headers
  };

  return axios(options)
    .then((response) => { return response.data; })
    .catch((error) => {
      console.log('API Helper postInteraction error: ', error);
    });
};

module.exports = {
  getProduct: getProduct,
  getProductStyles: getProductStyles,
  getRelated: getRelated,
  getReviews: getReviews,
  getQuestions: getQuestions,
  getRating: getRating,
  putReviewHelpfulness: putReviewHelpfulness,
  postInteraction: postInteraction
};
