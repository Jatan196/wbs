import mongoose from "mongoose";
// import { User } from "./userModel.js";

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
    appliedBy:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],

},{timestamps:true});
 const Job = mongoose.model("Job",jobModel);
// const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
// // Works
// await MyModel.findOne();
export default Job;