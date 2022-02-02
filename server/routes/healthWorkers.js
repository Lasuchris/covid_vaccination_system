const express = require('express')
const router = express.Router()
const { getHealthWorkers, registerHealthWorker } = require('../controllers/healthWorkersController')
const authorize = require('../middlewares/authorize')



router.post('/registerHealthWorker', registerHealthWorker)

router.get('/getHealthWorkers', getHealthWorkers)


module.exports = router