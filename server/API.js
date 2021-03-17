const express = require('express');
const axios = require('axios');

const helper = require('./api_helper.js');

const app = express();
const port = 3001;

const reviewsService = 'http://localhost:3000/';

app.use(express.json());

app.get('/:endpoint', function (req, res) {
  const destination = req.params.endpoint;
  const product_id = req.query.product_id;
  // if (destination === 'reviews') {
  //   helper.fetchData(reviewsService, destination, { params: { product_id: product_id, sort: 'relevant', count: 100 } }, console.log('hello'))
  // }
  var options = {
    method: 'GET',
    url: reviewsService + destination,
    params: { product_id: product_id },
  }
  axios(options)
  .then((response) => console.log('success', response.data))
  .catch((err) => console.log(err))

  res.status(200).send(`${destination} and ${product_id}`)
})

app.listen(port)