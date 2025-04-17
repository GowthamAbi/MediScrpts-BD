const Medicine = require("../models/Medicine")

const medicineController={
    addInventory:async(req,res)=>{
        try{
            const {medicineName, medicineType, medicinePrice, medicineDescription, medicineCompany, medicineImage, medicineQuantity, medicineExpiryDate, medicineManufactureDate, medicineCategory, medicineSubCategory, medicineId, medicineWtg
            }=req.body
            const inventory=await Medicine.create({medicineName, medicineType, medicinePrice, medicineDescription, medicineCompany, medicineImage, medicineQuantity, medicineExpiryDate, medicineManufactureDate, medicineCategory, medicineSubCategory, medicineId, medicineWtg,
            })
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    updateInventory:async(req,res)=>{
        try{
            const {medicineName, medicineType, medicinePrice, medicineDescription, medicineCompany, medicineImage, medicineQuantity, medicineExpiryDate, medicineManufactureDate, medicineCategory, medicineSubCategory, medicineId, medicineWtg,
            }=req.body
            const inventory=await Medicine.updateOne({medicineName, medicineType, medicinePrice, medicineDescription, medicineCompany, medicineImage, medicineQuantity, medicineExpiryDate, medicineManufactureDate, medicineCategory, medicineSubCategory, medicineId, medicineWtg,
            })
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    deleteInventory:async(req,res)=>{
        try{
            const {medicineName}=req.body
            const inventory=await Medicine.deleteOne({medicineName})
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    listInventory:async(req,res)=>{
        try{
            const inventory=await Medicine.find()
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    getInventoryById:async(req,res)=>{
        try{
            const {id}=req.params
            const inventory=await Medicine.findById(id)
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    searchInventory:async(req,res)=>{
        try{
            const {medicineName}=req.body
            const inventory=await Medicine.find({medicineName})
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    filterInventory:async(req,res)=>{
        try{
            const {medicineName}=req.body
            const inventory=await Medicine.find({medicineName})
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    sortInventory:async(req,res)=>{
        try{
            const {medicineName}=req.body
            const inventory=await Medicine.find({medicineName})
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    },
    checkStock:async(req,res)=>{
        try{
            const {medicineName}=req.body
            const inventory=await Medicine.find({medicineName})
            res.status(201).json({message:"Inventory added successfully",inventory})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Add Inventory Error"})
        }
    }
}

module.exports=medicineController