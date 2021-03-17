var express = require('express')
var app = express()

const port = 3001;

app.use(express.json());


app.get('/:b', function (req, res) {
  console.log(req.query.b)
})


app.listen(port)