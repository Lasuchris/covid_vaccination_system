const express = require('express')
const router = express.Router()
const { getJabs, registerJab } = require('../controllers/JabsController')
const authorize = require('../middlewares/authorize')


router.post('/registerJab', registerJab)

router.get('/getJabs', getJabs)

module.exports = router