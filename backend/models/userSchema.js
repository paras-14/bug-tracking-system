const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    role:{
        type:String,
        unique:false,
        default:"Organisation Leader"
    },
    email:{
        type:String,
        unique:true,
    },
    username:{
        type:String,
        min:2,
        max:50,
        unique:false
    },
    password:{
        type:String,
        unique:true,
        min:5,
        unique:false
    },
    phone:{
        type:Number,
        unique:true
    },
    image:{
        type:String,
    },
    address:{
        type:String,
        unique:false
    },
    uniqueCode:{
        type:String,
        unique:true,
    },
    gender:{
        type:String,
        unique:false,
        default:"none"
    }
    
},
{timestamps:true}

);
module.exports = mongoose.model("User",UserSchema);