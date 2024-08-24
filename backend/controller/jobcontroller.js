import { Job } from "../models/jobModel.js";
import { Department } from "../models/deptModel.js";
import { User } from "../models/userModel.js";

export const jobOfDept = async (req, res) => {
    try {
        const deptId = req.body.deptId;

        if (!dept) {
            return res.status(400).json({
                message: "Invalid Department Id"
            });
        }
        const jobs = await Department.findById(deptId).populate('jobs').jobs;

        return res.status(200).json(jobs);

    } catch (error) {
        return res.status(400).json(error);
    }

};

export const getDepts = async (req, res) => {
    try {
        const depts = await Department.find();

        return res.status(200).json(depts);

    } catch (error) {
        return res.status(400).json(error);
    };

};
export const appliedJobs = async (req, res) => {
    try {
        const userId = req.body.userId;

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
