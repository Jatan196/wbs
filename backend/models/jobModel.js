import mongoose from "mongoose";


const jobModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    publishDate:{
        type:String,
        required:true
    },
    closeDate:{
        type:String
    },
    applied:{
        type:Boolean
    },
   

},{timestamps:true});
export const Job = mongoose.model("Job",jobModel);