import express from "express"; // (2nd ->> way)change in package.json
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import mongoose from "mongoose";
//import cookieParser from "cookie-parser";
import cors from "cors"
import http from "http";
import jobsRoutes from "./routes/jobsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { deptScraper , jobScraper , allScraper} from "./scrapper/scrap.js"; 

dotenv.config({});
const url1="https://www.ncs.gov.in/pages/govt-job-vacancies.aspx";
const url2="https://www.mha.gov.in/en/notifications/vacancies?page=2";
const app=express();

//mongoose.set('bufferCommands', false);
const PORT=  5000 ; //process.env.PORT ||
 
const server = http.createServer(app);
const coresOption={
  origin:'http://localhost:3000',
  credentials:true
}; 
app.use(cors(coresOption));
app.use(express.urlencoded({extended:true}));    // why ?? //* for api
app.use(express.json());

app.use("/api/v1/jobs",jobsRoutes);
app.use("/api/v1/user",userRoutes);
//app.use(cookieParser()); // imp for using token from cookie 


server.listen(PORT,()=>{
   
  connectDB();
    console.log(`Server listen at port ${PORT}`);
 });  

// one time scrapping of jobs of each department
//allScraper();
//deptScraper(url1);
//jobScraper(url2,"66c9e507f134e9b2a9f65394");