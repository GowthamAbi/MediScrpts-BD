const { response } = require("../app");
const User=require("../models/User")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const authController={
    register:async(req,res)=>{
        try{
            const{ name, email, password, phone, address } = req.body;
            //check if user already exists
            const user=await User.findOne({email})

             if(user)
             {
                return res.status(400).json({message:"User already exists"})
             }

             const newUser=new User({name, email, password, phone, address});

             await newUser.save();
             res.status(201).json({message:"User created successfully"});

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