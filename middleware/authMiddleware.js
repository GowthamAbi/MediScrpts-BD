const { JWT_SECRET } = require("../config/db");

const auth={
    checkAuth:(req,res,next)=>{
        try{
            // get access token from cookies
            const token=req.cookies.token;
            //if taken have or not
            if(!token) return res.status(401).json({message:"Unauthorized"})
            //verify token
        JWT_SECRET.verify(JWT_SECRET,token,(err,user)=>{
            if(err) return res.status(403).json({message:"Forbidden"})
                req.user=user;
            next();
        })

        }
        catch(err){
            console.log(err);
            res.status(500).json({message:"Auth Error"})
        }
    }
}
module.exports=auth