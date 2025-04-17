const express=require("express")
const medicineController = require("../controllers/medicineController")
const medicineRoutes=express.Router()
const auth=require('../middleware/authMiddleware');



medicineRoutes.post('/inventory/add',auth.checkAuth,medicineController.addInventory)
medicineRoutes.post('/inventory/update',auth.checkAuth,medicineController.updateInventory)
medicineRoutes.post('/inventory/delete',auth.checkAuth,medicineController.deleteInventory)
medicineRoutes.get('/inventory/list',auth.checkAuth,medicineController.listInventory)
medicineRoutes.get('/inventory/:id',auth.checkAuth,medicineController.getInventoryById)
medicineRoutes.post('/inventory/search',auth.checkAuth,medicineController.searchInventory)
medicineRoutes.post('/inventory/filter',auth.checkAuth,medicineController.filterInventory)
medicineRoutes.post('/inventory/sort',auth.checkAuth,medicineController.sortInventory)
medicineRoutes.post('/inventory/stock',auth.checkAuth,medicineController.checkStock)


module.exports=medicineRoutes