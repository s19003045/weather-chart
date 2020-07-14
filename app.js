
'use strict'
const express = require('express')
const app = express()
const line = require('@line/bot-sdk');
const bodyParser = require('body-parser')


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 使用 body-parser 解析 url，並使用 qs 套件
app.use(bodyParser.urlencoded({ extended: true }))
// 使用 body-parser 解析 application/json，並將 buffer 轉成 string，存進 req.rawBody
app.use(
  bodyParser.json({
    verify: (req, _, buf) => {
      req.rawBody = buf.toString();
    },
  })
)

app.use('/', require('./routes'))


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app listen on port ${port}`)
})






