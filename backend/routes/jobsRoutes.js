import express from "express";
import {jobOfDept,getDepts,appliedJobs} from "../controller/jobcontroller.js";

// import {isAuthenticated} from "../middleware/userAuthentication.js"

const router=express.Router();

router.route("/getDepts").get(getDepts);
router.route("/getAppliedJobs").get(appliedJobs);
router.route("/getByDeptId/:deptId").get(jobOfDept); // this id will be of provider -> 

// central's docId ,or states me particular state k json ki id


export default router;