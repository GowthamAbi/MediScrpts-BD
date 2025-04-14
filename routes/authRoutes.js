const express=require('express');
const authController = require('../controllers/authController');
const authRouter=express.Router();

authRouter.post('/register',authController.register)
authRouter.post('/login',authController.login)
authRouter.post('/logout',authController.logout)
authRouter.get('/me',authController.me)
authRouter.post('/refresh',authController.refresh)
authRouter.post('/forgot-password',authController.forgotPassword)


module.exports=authRouter;