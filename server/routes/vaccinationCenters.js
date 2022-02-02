const express = require('express')
const router = express.Router()
const { getVaccinationCenters,registerVaccinationCenter } = require('../controllers/vaccinationCentersController')
const authorize = require('../middlewares/authorize')



router.post('/registerVaccinationCenter', registerVaccinationCenter)

router.get('/getVaccinationCenters', getVaccinationCenters)


module.exports = router