// Business Logics
import { User } from "../models/userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from 'validator';

export const register = async (req, res) => {
    try {

        const { fullName, email, phno, password, confirmPassword, appliedJobs, gender } = req.body;

        if (!fullName || !email || !phno  || !gender) {
            return res.status(400).json({ message: "Please fill all entries" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid Email Format' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Re-Enter Password" });
        }

        // if user attempts to register with duplicate username 
        const user = await User.findOne({ fullName });
        if (user) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // now to protecting passwords from external theft , we uses hashed versoin of this stuff by bcrypt..
        const hashedPass = await bcrypt.hash(password, 10); // higher the numeric value , higher is the strength and time coplexity of hasehd value

        await User.create({
            fullName, // as in this object key and value name is same we directly password , without using key value format
            email,
            phno,
            password: hashedPass,
            appliedJobs,
            gender

        });
        // now after successful creation
        return res.status(201).json({
            message: "Account created !!",
            success: true
        })

    }
    catch (error) {
        console.log(error);
    }
}
export const login = async (req, res) => {
    console.log(req.body);
    try { // take username and password from req.body
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all entries" });
        }
        console.log("finding user in data base");
        const user = await User.findOne({ email });
        console.log("found the user");
        if (!user) {
            return res.status(400).json({
                message: "No Account Exist with given email",
                success: false
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Authentication Failed!!",
                success: false
            })
        }

        const tokenData = {
            userId: user._id // from where this user with small u?? --> this user is one which we got from findOne method of  schema of "User" that we have imported 
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
        // in browser , in cookie token's key and data ,and its extra info , will stored like , (cookie name or a variable ) "token" and its data as token 
        // const token = xy (above jwt return xy to it)  
        console.log("sending response");
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            // this security is to protect our cookie from being stolen
            message: "You Are INN!!",
            // now returning json data as response to client side  
            user
        })
    }
    catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Successfully logged out"
        });
    }
    catch (error) {
        console.log(error);
    }
}
export const apply = async (req, res) => {
    const userId = req.id;
    const { jobId } = req.body;

    try {
        const user = await User.findById(userId); // Await the promise

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.appliedJobs.push(jobId); 
        await user.save(); // save is called on instance of model

        return res.status(200).json({
            message: "Applied successfully"
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export const getUserInterestedDept =  (req,res) => {
    try {
        // List of IDs of interested dept 
    } catch (error) {
        
    }
};