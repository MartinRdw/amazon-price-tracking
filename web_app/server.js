'use strict'

var express = require('express')
var bodyParser = require('body-parser')

const client = require('../worker/client')

var app = express()

var config = require('./config')
const PORT = process.env.PORT || config.port

app.use(bodyParser.json())
app.use(express.static(__dirname))
app.listen(PORT)

console.log('App listening on http://localhost:' + PORT)

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname })
})

app.post('/api/alert', function (req, res) {
  const { name, url, price, delay } = req.body

  // Here we launch the 'TrackAmazonPrice' Zenaton Workflow.
  client.run.withTag(`${name} (${price}€)`).workflow('TrackAmazonPrice', name, url, price, delay)

  res.json()
})
