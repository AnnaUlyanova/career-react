var express = require('express')

module.exports = {
  getCV: getCV
}

function getCV (req, res) {
  res.download('./server/static/CV.pdf')
}
