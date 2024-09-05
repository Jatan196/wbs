import Job  from "../models/jobModel.js";
import { Department } from "../models/deptModel.js";
import { User } from "../models/userModel.js";

export const jobOfDept = async (req, res) => {
    try {
       const deptId = req.params.deptId;
console.log(deptId)
        if (!deptId) {
            return res.status(400).json({
                message: "Invalid Department Id"
            });
        }
        const jobs = await Department.findById(deptId).populate('jobs');


        
        console.log(jobs);
        return res.status(200).json(jobs.jobs);

    } catch (error) {
        return res.status(405).json(error);
    }

};

export const getDepts = async (req, res) => {
    try {
        const depts = await Department.find();
        const data=depts?.map((dept)=>{
            return {
                "_id":dept._id,
                "name":dept.name, 
                "recruitmentLink":dept.recruitmentLink
            }
        });
        return res.status(200).json(data);

    } catch (error) {
        return res.status(400).json(error);
    };

};
export const appliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        if (!userId) {
            return res.status(400).json({
                message: "Invalid UserId"
            });
        }
        const jobs = User.findById(userId).populate('appliedJobs').jobs;

        return res.status(200).json({
            message:"Got the jobs you have applied",
            jobs
        })
    }
    catch (error) {
        return res.status(400).json(error);
    }
};
