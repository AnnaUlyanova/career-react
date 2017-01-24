var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getColors((err, colors) => {
    // Warning: this error handling is rubbish
    if (!err) res.json(colors)
  })
})

// router.get('/', function (req, res) {
//   db.getColors()
//     .then(function(colors) {
//       res.json({colors})
//     })
//     .catch(function (err) {
//       res.status(500).send(err.message)
//     })
// })


module.exports = router
