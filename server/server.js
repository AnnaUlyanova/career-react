var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var colors = require('./routes/colors')
var allColors = require('./routes/allColors')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, 'static')))
app.use('/color', colors)
app.use('/all-colors', allColors)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
