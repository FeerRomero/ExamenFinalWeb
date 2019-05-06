const mongoose = require('mongoose')
const urlConnect = require('../config.js')

var connectionURL = process.env.connectionURL || urlConnect.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
