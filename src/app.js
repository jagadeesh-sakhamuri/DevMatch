const express = require("express");
const { connectDB } = require("./config/database");
const User=require("./models/user");
const {adminAuth,userAuth}=require("./middlewares/auth");

const app = express();

app.get("/admin",adminAuth,(req,res,next)=>{
    console.log("handling the route user1");
    //res.send("response 1");
    next();
},
(req,res,next)=>{
    console.log("handling the route user 2");
    //res.send("2nd response");
    next();
},
(req,res,next)=>{
    console.log("handling the route user 3");
    next();
    //res.send("3rd response");
    
},
(req,res)=>{
    console.log("handling the route user 4");
    res.send("4th response");
})

app.get("/user/:userID/:Password",(req,res)=>{
    res.send("get http method ");
    console.log(req.query);
    let {userID,Password}=req.params;
    console.log(userID+"        "+Password);
    console.log(req.params);
})

app.get("/user",userAuth,(req,res)=>{
    res.send("get  http method ");
})

app.use("/user",(req,res)=>{
    res.send("use http method ");
})


app.delete("/user",(req,res)=>{
    res.send("delete http method ");
})



connectDB().then(()=>{
    console.log("database connected sucessfully");
    app.listen(7777, () => {
        console.log("listening to port 7777");
    });
})
.catch((err)=>{
    console.log("some error occured : "+ err.message);
});


