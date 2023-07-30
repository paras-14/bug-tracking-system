const mongoose=require("mongoose");
const bugsSchema=new mongoose.Schema({
    bugName:{
        type:String,
        min:2,
        max:50,
        unique:true
    },
    project:{
        type:String,
        unique:false,
    },
    bugDate:{
        type:String,
        unique:false,
    },
    bugPriority:{
        type:String,
        unique:false
    },
    deadline:{
        type:Number,
        unique:false
    },
    status:{
        type:String,
        unique:false
    },
    raiser:{
        type:String,
        unique:false,
    }
},
{timestamps:true}

);
module.exports = mongoose.model("Bugs",bugsSchema);