// const express=require('express');
// const app = express();

const adminAuth=(req,res,next)=>{
    try{
        const token = "xyz";
    const isAuthorized= token==="xyz";
    if( ! isAuthorized){
        res.status(400).send("not admin ");
    }
    else{
        console.log("admin authorization sucsses");
        next();
    }
    }catch(err){
        res.send("error :",err.message);
    }   
}
const userAuth=(req,res,next)=>{
    try{
        const token = "xyz";
    const isAuthorized= token==="xyz";
    if( ! isAuthorized){
        res.status(400).send("not admin ");
    }
    else{
        console.log("user authorization sucsses");
        next();
    }
    }catch(err){
        res.send("error :",err.message);
    }   
}
module.exports={adminAuth,userAuth};