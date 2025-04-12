const mongoose=require('mongoose')

const medicineSchema=new mongoose.Schema({
    medicineName:{
        type:String,
        required:true,
    },
    medicineType:{
        type:String,
        required:true,
    },
    medicinePrice:{
        type:Number,
        required:true,
    },
    medicineDescription:{
        type:String,
        required:true,
    },
    medicineCompany:{
        type:String,
        required:true,
    },
    medicineImage:{
        type:String,
        required:true,
        default:'https://example.com/default-image.png'
    },
    medicineQuantity:{
        type:Number,
        required:true,
    },
    medicineExpiryDate:{
        type:Date,
        required:true,
    },
    medicineManufactureDate:{
        type:Date,
        required:true,
    },
    medicineCategory:{
        type:String,
        required:true,
    },
    medicineSubCategory:{
        type:String,
        required:true,
    },
    medicineId:{
        type:String,
        default:Date.now()
    },
    medicineWtg:{
        type:String,
        require:true,
    },
    

    

    
})

module.exports=mongoose.model('Medicine',medicineSchema,'medicine')