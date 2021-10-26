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

module.exports.parseRelated = parseRelated;