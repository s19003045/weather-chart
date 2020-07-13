const express = require('express')
const app = express()
const line = require('@line/bot-sdk');
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  return res.json('index page')
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})






