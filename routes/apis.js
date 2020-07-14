const express = require('express')
const router = express.Router()
const { apiHelper } = require('../utils/helpers')
const apiKey = process.env.apiKey

router.get('/', (req, res) => {
  return res.json('api index page')
})

router.get(`/weather/all-cities-a-week`, async (req, res) => {
  try {
    const queryString = `Authorization=${apiKey}`

    const apiData = await apiHelper.get(`/F-D0047-091?${queryString}`)

    if (apiData.data.success === 'true') {
      return res.json(apiData.data)
    } else {
      return res.json('failed to get data')
    }

  } catch (err) {
    console.log(err)
    return res.json('failed to get data')
  }

})


module.exports = router