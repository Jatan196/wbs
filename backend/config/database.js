import mongoose from "mongoose";

const connectDB = async () => {
const MONGO_URI="mongodb+srv://tandonjatan:Metajatan1@cluster0.ol1ubyc.mongodb.net/";

await mongoose.connect(MONGO_URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000 
}).then((data) => {
    console.log('Database gets connected',data);
  
}).catch((error)=>{
    console.log(error);
    console.log('hi');
})  
};
 
export default connectDB;  