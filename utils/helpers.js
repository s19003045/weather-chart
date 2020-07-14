const axios = require('axios')
const cwbBaseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore'


const apiHelper = axios.create({
  baseURL: cwbBaseURL,
  timeout: 1000,
});

module.exports = { apiHelper }