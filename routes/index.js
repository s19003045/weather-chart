const express = require('express')
const router = express.Router()

router.use('/api', require('./apis.js'))
router.use('/', require('./routes.js'))


module.exports = router