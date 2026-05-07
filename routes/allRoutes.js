
const express = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const bookController = require('../controllers/bookController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//To setup routes outside express server, create object for Router class of express
const router = new express.Router()

//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)
//google login
router.post('/google-login',userController.googleLoginController)
//homeBooks
router.get('/home-books',bookController.getHomePageBookController)

//-----------------------AUTHORISED USER - USER---------------------------------------

//user edit
router.put('/user/:id',authMiddleware,multerMiddleware.single('picture'),userController.userEditController)
//add book
router.post('/books',authMiddleware,multerMiddleware.array('uploadImages',3),bookController.addBookController)
//get BooksPage
router.get('/all-books',authMiddleware,bookController.getBooksPageController)
//get user upload books
router.get('/user-books',authMiddleware,bookController.getUserBooksController)
//get user bought books
router.get('/bought-books',authMiddleware,bookController.getUserBoughtBooksController)
//remove user upload books
router.delete('/books/:id',authMiddleware,bookController.removeUserUploadBooksController)
//view book
router.get('/books/:id',authMiddleware,bookController.viewBookController)
//book payment
router.put('/books/:id/buy',authMiddleware,bookController.bookPaymentController)

//-----------------------AUTHORISED USER - ADMIN---------------------------------------
//admin profile edit
router.put('/profile/:id',adminMiddleware,multerMiddleware.single('picture'),userController.userEditController)
//all users list
router.get('/user-list',adminMiddleware,userController.getAllUsersController)
//all books list
router.get('/book-list',adminMiddleware,bookController.getAllBookController)
//update books status
router.put('/books/:id',adminMiddleware,bookController.updateBookStatusController)

module.exports = router