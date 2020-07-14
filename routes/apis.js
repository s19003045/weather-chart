const express = require('express')
const router = express.Router()
const { apiHelper } = require('../utils/helpers')
const apiKey = process.env.apiKey

router.get('/', (req, res) => {
  return res.json('api index page')
})
