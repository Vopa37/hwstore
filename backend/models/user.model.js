const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    lastname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:50,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    admin:{
        type:Boolean,
        required:true,
        default:false,
    }
},{
        timestamps:true,
})

const User = mongoose.model("User",userSchema);

module.exports = User;