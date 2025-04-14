const { response } = require("../app");
const User=require("../models/User")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { JWT_SECRET } = require("../config/db");
const { decrypt } = require("dotenv");

const authController={
    register:async(req,res)=>{
        try{
            //validate request body
            const{ name, email, password, phone, address } = req.body;
            //check if user already exists
            const user=await User.findOne({email})

             if(user)
             {
                return res.status(400).json({message:"User already exists"})
             }
            //check if password is strong
             const hashPassword=await bcrypt.hashSync(password,10)
             //create new user

             const newUser=new User({name, email, password:hashPassword, phone, address});
             //save user to database
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
          

            //req to body
            const {email,password}=req.body;
            //check if user exists
            const user=await User.findOne({email});
            if(!user){
                return res.status(400).json({message:"User not found"})
            }

            //check if password is correct
            const isMatch=await bcrypt.compare(password,user.password)

            console.log("Hashed password in DB:", user.password);
            console.log("Password entered by user:", password);
            console.log("Do they match?", isMatch);


            if(!isMatch){
                return res.status(400).json({message:"Invalid credentials"})
            }
            //create token
                const token=await jwt.sign({id:user._id},JWT_SECRET)

                //set token in cookie
                res.cookie("token",token,{httpOnly:true})


                res.status(200).json({message:"Login Successfully"})
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Login Error"})
        }
    },
    logout:(req,res)=>{
        try{
            res.clearCookie('cookies')
            res.json({message:"Logout Success"});
        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Logout Error"})
        }
    },
    me:async(req,res)=>{
        try{
        const {userId}=req
            const user=await User.findById(userId).select('-password-__v')
            if(!user){
                return res.status(400).json({message:"User not found"})
            }
            res.status(200).json(user)
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