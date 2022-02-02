const express = require('express')
const router = express.Router()
const {registerPerson,getPeople,getPerson} = require('../controllers/nationalsController')


router.post('/registerNational',registerPerson)

router.get('/getNationals',getPeople)

router.get('/getClient/:nin',getPerson)


module.exports = router