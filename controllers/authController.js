const { response } = require("../app");

const authController={
    register:async(req,res)=>{
        try{
            res.json({message:"Register Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Register error"});
        }
    },
    login:async(req,res)=>{
        try{
            res.json({message:"Login Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Login Error"})
        }
    },
    logout:(req,res)=>{
        try{
            res.json({message:"Logout Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Logout Error"})
        }
    },
    me:async(req,res)=>{
        try{
            res.json({message:"Dashboard Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Me Error"})
        }
    },
    refresh:async(req,res)=>{
        try{
            res.json({message:"Refresh Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Refresh Error"})
        }
    },
    forgotPassword:async(req,res)=>{
        try{
            res.json({message:"Forgot Password Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Forgot Password Error"})
        }
    },

}
module.exports=authController