const express = require('express');
const axios = require('axios');

const helper = require('./api_helper.js');

const app = express();
const port = 3001;

const reviewsService = 'http://localhost:3000/reviews';

app.use(express.json());

app.get('/:endpoint', function (req, res) {
  const destination = req.params.endpoint;
  const product_id = req.query.product_id;

  //  I think this can be made very DRY by if-clausing the endpoint to set the options.url and options.params
  //  so that only one is needed for all GET requests, or is it more performant to have one handler for each
  //  major service? Presumably the latter
  
  var options = {
    method: 'GET',
    url: reviewsService,
    params: { product_id: product_id },
  }
  axios(options)
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err))

  res.status(200).send(`${destination} and ${product_id}`)
})

app.listen(port)