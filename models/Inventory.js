const mongoose=require('mongoose')

const inventorySchema=new mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim:true,
    },
    email:{
        required:true,
        true:String,
        unique:true,
        trim:true,
    },
    password:{
        required:true,
        type:String,
        trim:true,
    },
    phone:{
        required:true,
        type:String,
        trim:true,
    },
    address:{
        required:true,
        type:String,
        trim:true,
    },
    role:{
        type:String,
        enum:['agent','inventory','user','admin'],
        default:'user'
    },
    profile:{
        type:String,
        default:'profile.png'
    },
    dob:{
        type:Date,
        default:Date.now()
    },
    id:{
        type:String,
        default:Date.now()
    },
    companyName:{
        type:String,
        default:'company name'
    },

})

module.exports=mongoose.model('Inventory',inventorySchema,'inventory')