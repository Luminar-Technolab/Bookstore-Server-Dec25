
const express = require('express')
const userController = require('../controllers/userController')

//To setup routes outside express server, create object for Router class of express
const router = new express.Router()

//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)

module.exports = router