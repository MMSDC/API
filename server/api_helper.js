const axios = require('axios');

const fetchData = (url, query, callback) => {
  axios.get(url, query)
    .then((data) => {
      callback(data);
    }).catch((err) => {
      throw err;
    });
};

const createData = (url, path, query, callback) => {
  axios.post(url + path, query)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      throw err;
    });
};

const updateData = (url, path, query, callback) => {
  axios.put(url + path, query)
    .then((res) => {
      callback(res);
    }).catch((err) => {
      throw err;
    });
};

module.exports.fetchData = fetchData;
module.exports.createData = createData;
module.exports.updateData = updateData;
