const express = require('express')
const router = express.Router()
const { getVaccines, registerVaccine } = require('../controllers/VaccinesController')
const authorize = require('../middlewares/authorize')


router.post('/registerVaccine', registerVaccine)

router.get('/getVaccines', getVaccines)


module.exports = router