const express=require('express');
const authController = require('../controllers/authController');
const auth=require('../middleware/authMiddleware');
const { JWT_SECRET } = require('../config/db');
const authRouter=express.Router();

authRouter.post('/register',authController.register)
authRouter.post('/login',authController.login)
authRouter.post('/logout',authController.logout)
authRouter.get('/me',auth.checkAuth,authController.me)
authRouter.post('/refresh',authController.refresh)
authRouter.post('/forgot-password',authController.forgotPassword)
authRouter.post('/update',auth.checkAuth,authController.updateUser)


module.exports=authRouter;