const express=require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const auth=require('../middleware/authMiddleware');
const { JWT_SECRET } = require('../config/db');
const agentController = require('../controllers/agentController');
const inventoryController = require('../controllers/inventoryController');
const authRouter=express.Router();

// Clinet routes
authRouter.post('/register',authController.register)
authRouter.post('/login',authController.login)
authRouter.post('/logout',authController.logout)
authRouter.get('/me',auth.checkAuth,authController.me)
authRouter.post('/forgot-password',authController.forgotPassword)
authRouter.post('/update',auth.checkAuth,authController.updateUser)

//Admin routes
authRouter.post('/admin/register',adminController.register)
authRouter.post('/admin/login',adminController.login)
authRouter.post('/admin/logout',adminController.logout)
authRouter.get('/admin/me',auth.checkAuth,adminController.me)
authRouter.post('/admin/forgot-password',adminController.forgotPassword)
authRouter.post('/admin/update',auth.checkAuth,adminController.updateUser)

//Agent routes
authRouter.post('/agent/register',agentController.register)
authRouter.post('/agent/login',agentController.login)
authRouter.post('/agent/logout',agentController.logout)
authRouter.get('/agent/me',auth.checkAuth,agentController.me)
authRouter.post('/agent/forgot-password',agentController.forgotPassword)
authRouter.post('/agent/update',auth.checkAuth,agentController.updateUser)


//Inventory routes
authRouter.post('/inventory/register',inventoryController.register)
authRouter.post('/inventory/login',inventoryController.login)
authRouter.post('/inventory/logout',inventoryController.logout)
authRouter.get('/inventory/me',auth.checkAuth,inventoryController.me)
authRouter.post('/inventory/forgot-password',inventoryController.forgotPassword)
authRouter.post('/inventory/update',auth.checkAuth,inventoryController.updateUser)




module.exports=authRouter;