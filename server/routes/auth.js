const express = require('express')
const router = express.Router()
const {signIn,signUp} = require('../controllers/authController')
const authorize = require('../middlewares/authorize')



router.post('/signUp',signUp)

router.post('/signIn',signIn)


module.exports = router