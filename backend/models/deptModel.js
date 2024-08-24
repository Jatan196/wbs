import mongoose from "mongoose";

// here why not import usermodel , as we have used user here also
const deptModel = new mongoose.Schema({
    name:{          
        type:String,
        // required:true
    },
    ministry:{
        type:String,
      
    },
    recruitmentLink:{
        type:String,
        required:true
    },
    jobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }], 
    
},{timestamps:true});
 
export const Department = mongoose.model("Department",deptModel);