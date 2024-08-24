import express from "express"; // (2nd ->> way)change in package.json
//import dotenv from "dotenv";
import connectDB from "./config/database.js";
//import cookieParser from "cookie-parser";
import http from "http";
import jobsRoutes from "./routes/jobsRoutes.js"
import mongoose from "mongoose";

// dotenv.config({path:"//"});
const app=express();
mongoose.set('bufferCommands', false);
const PORT=  5000 ; //process.env.PORT ||
 
const server = http.createServer(app);

app.use(express.urlencoded({extended:true}));    // why ?? //* for api
app.use(express.json());

app.use("/api/v1/jobs",jobsRoutes);
//app.use(cookieParser()); // imp for using token from cookie 

// app.listen(8080,()={
    
// })
server.listen(PORT,()=>{
   
  connectDB();
    console.log(`Server listen at port ${PORT}`);
 })  