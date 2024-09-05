import mongoose from "mongoose";

const connectDB = async () => {
//const MONGO_URI="mongodb+srv://tandonjatan:skd@cluster0.vne0j.mongodb.net/";

await mongoose.connect(process.env.MONGO_URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000 
}).then((data) => {
    console.log('Database gets connected');
  3
}).catch((error)=>{
    console.log(error);
    console.log('hi');
})  
};
 
export default connectDB;  