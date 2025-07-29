const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
       type: String,
        required:true
    },
    lastName:{
        type:String
    },
    emailId:{
        type: String
    },
    gender:{
        type:String
    },
    age:{
        type:Number
    },
    password:{
        type:String
    }
});

// const user=mongoose.model("user",userSchema);
// module.exports={user};
module.exports=mongoose.model("User",userSchema);