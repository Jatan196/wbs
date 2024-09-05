import express from "express";
import { register,login,logout,apply } from "../controller/usercontroller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
//import {isAuthenticated} from "../middleware/userAuthentication.js"

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login); // why this method is post api-> becoz while logging we are s  aving token in cookiers
router.route("/logout").get(logout);
router.route("/apply").post(isAuthenticated,apply);

export default router;
