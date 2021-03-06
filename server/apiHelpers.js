/* eslint-disable camelcase */

const axios = require('axios');
const config = require('../config.js');

const auth = {headers: {Authorization: `${config.key}`} };


const getProduct = (productId) => {
  // console.log('productId :', typeof productId, productId);

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, auth)
    .then((result) => {
      const product = result.data;
      return getPrimaryStyle(product.id)
        .then((primaryStyle) => {
          const thumbnailUrl = primaryStyle.photos[0].thumbnail_url;
          const originalPrice = primaryStyle.original_price;
          const salePrice = primaryStyle.sale_price;
          product.thumbnailUrl = thumbnailUrl;
          product.originalPrice = originalPrice;
          product.salePrice = salePrice;

          return product;
        });
    })
    .catch((error) => {
      console.log('API Helper getProduct error: ', error.response.status, error.response.statusText);
    });
};

const getProductStyles = (productId) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`, auth)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log('API Helper getProductStyles error: ', error.response.status, error.response.statusText);
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
      console.log('API Helper getRating error: ', error.response.status, error.response.statusText);
    });
};

const getPrimaryStyle = (productId) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`, auth)
    .then((response) => {
      const primaryStyle = response.data.results[0];
      return primaryStyle;
    })
    .catch((error) => {
      console.log('API Helper getPrimaryStyle error: ', error.response.status, error.response.statusText);
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
                return { id, category, name, features, thumbnailUrl, defaultPrice, originalPrice, salePrice};
              }); // consolidates and returns all product information including thumbnail url and price
            })
            .catch((error) => {
              console.log('API Helper getRelated error at step getPrimaryStyle: ', error.response.status, error.response.statusText);
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
      console.log('API Helper getReviewMeta error: ', error.response.status, error.response.statusText);
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
      console.log('API Helper getReviews error: ', error.response.status, error.response.statusText);
    });
};

const postReview = (review) => {
  let data = {
    'characteristics': JSON.parse(review.characteristics),
    'email': review.email,
    'name': review.name,
    'body': review.body,
    'photos': review.photos ? review.photos : [],
    'product_id': Number(review.product_id),
    'rating': Number(review.rating),
    'recommend': (review.recommend === 'true'),
    'summary': review.summary
  };

  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/',
    headers: {
      'Authorization': `${config.key}`
    },
    data: data,
    method: 'post',
  };

  return axios.request(options).then((result) => {
    return result;
  }).catch((err) => {
    console.log('API Helper postReviews error: ', err);
  });
};


const putReviewHelpfulness = (id) => {
  return axios.put (`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${id}/helpful`, {}, auth)
    .then((res) => {
      return;
    })
    .catch((err) => {
      return 'error updated review helpfulness', err;
    });
};

const reportReview = (reviewId) => {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/reviews/${reviewId}/report`, {}, auth)
    .then(() => {
      return;
    })
    .catch((err) => {
      return 'error reporting review', err;
    });
};


const getQuestions = (productId) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=100`, auth)
    .then((results) => {
      return results.data.results;
    })
    .catch((error) => {
      return error;
    });
};

//add question
const postQuestion = (data) => {
  let productId = Number(data.productId);

  return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', {
    body: data.body,
    name: data.name,
    email: data.email,
    // eslint-disable-next-line camelcase
    product_id: productId
  }, auth)
    .then(() => {
      return 'SUCCESS POST QUESTION IN API HELPER';
    })
    .catch((err) => {
      return err;
    });
};



//add answer
const postAnswer = (data) => {
  let questionId = Number(data.questionId);
  return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`, {
    body: data.body,
    name: data.name,
    email: data.email,
    photos: data.photos
  }, auth)
    .then(() => {
      return 'SUCCESS POST ANSWER IN API HELPER';
    })
    .catch((err) => {
      return err;
    });
};

//mark question as helpful
const questionHelpful = (questionId) => {
  return axios.put (`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/helpful`, {}, auth)
    .then((res) => {
      return 'SUCCESS HELPFUL QUESTION UPDATE';
    })
    .catch((err) => {
      return 'ERROR HELPFUL QUESTION UPDATE', err;
    });
};



// mark answer as helpful
const answerHelpful = (answerId) => {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/helpful`, {}, auth)
    .then(() => {
      return 'SUCCESS UPDATING ANSWER HELPFUL';
    })
    .catch((err) => {
      return 'FAILED TO UPDATE ANSWER HELPFUL';
    });
};


//mark answer for report
const reportAnswer = (answerId) => {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/report`, {}, auth)
    .then(() => {
      return 'Answer Reported';
    })
    .catch((err) => {
      return 'FAILED TO report answer', err;
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
      console.log('API Helper postInteraction error: ', error.response.status, error.response.statusText);
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
  reportReview: reportReview,
  postReview: postReview,
  postInteraction: postInteraction,
  postQuestion: postQuestion,
  postAnswer: postAnswer,
  questionHelpful: questionHelpful,
  answerHelpful: answerHelpful,
  reportAnswer: reportAnswer
};
