const express = require('express')
const router = express.Router()
const { getDistricts,registerDistrict } = require('../controllers/DistrictsController')
const authorize = require('../middlewares/authorize')



router.post('/registerDistrict', registerDistrict)

router.get('/getDistricts', getDistricts)


module.exports = router