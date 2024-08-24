import mongoose from "mongoose";
import validator from 'validator';

const userModel = new mongoose.Schema({
    fullName:{
        type:String,    
        required:true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    phno:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    },
    appliedJobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }],
    

},{timestamps:true});
export const User = mongoose.model("User",userModel); // it is the collection / table named User with above specieed schema