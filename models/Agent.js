const mongoose=require('mongoose')

const agentSchema=new mongoose.Schema({
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
    companyId:{
        type:String,
        default:Date.now()
    },
    companyAddress:{
        type:String,
        default:'company address'
    },
    companyPhone:{
        type:String,
        default:'company phone'
    },
    companyEmail:{
        type:String,
        default:'company email'
    },
    companyWebsite:{
        type:String,
        default:'company website'
    },
    companyLogo:{
        type:String,
        default:'company logo'
    },
    companyDescription:{
        type:String,
        default:'company description'
    },
    companyType:{
        type:String,
        default:'company type'
    },
    companyPic:{
        type:String,
        default:'company pic'
    },
    companyStatus:{
        type:String,
        default:'company status'
    },
    adharCard:{
        type:String,
        default:'adhar card'
    },
    panCard:{
        type:String,
        default:'pan card'
    },
    gst:{
        type:String,
        default:'gst'
    },


})

module.exports=mongoose.model('Agent',agentSchema,'agent')