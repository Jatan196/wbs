import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from './navbar';

const Register = () => {
    const [user, setUser] = useState({
        fullName:"",
        email:"",
        phno:"",
        password:"", 
        confirmPassword:"",
        gender:""
     
    });
    
    const handleCheckbox = (gender) => {
        setUser({ ...user, gender });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
        // Make the API call here and handle success/error response
        
        try {
            const res = await axios.post(`http://localhost:5000/api/v1/user/register`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
        } catch (error) {
            console.log(error);
        }
          // reseting form
          setUser({
            
            fullName:"",
             email:"",
             phno:"",
             password:"", 
             confirmPassword:"",
             gender:""
          }
    );
    };

    return (
        <div className="body min-h-screen flex items-center justify-center">
            <div className="w-full fixed left-0 top-0 z-50">
                <Navbar />
            </div>
            <div className="text-center p-6 rounded-lg shadow-md  bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border  max-w-md w-full  p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Sign Up</h1>

                <form onSubmit={onSubmitHandler} className="text-blue-700">
                    <div className="mb-4">
                        <input
                            className="input input-bordered w-full h-10"
                            value={user.fullName}
                            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="input input-bordered w-full h-10"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            type="text"
                            placeholder="Enter Valid Email"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="input input-bordered w-full h-10"
                            value={user.phno}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="input input-bordered w-full h-10"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="input input-bordered w-full h-10"
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <p className="text-blue-500 mr-2">Male</p>
                            <input
                                className="bg-white checkbox"
                                checked={user.gender === "male"}
                                onChange={() => handleCheckbox("male")}
                                type="checkbox"
                            />
                        </div>
                        <div className="flex items-center">
                            <p className="text-blue-500 mr-2">Female</p>
                            <input
                                className="bg-white checkbox"
                                checked={user.gender === "female"}
                                onChange={() => handleCheckbox("female")}
                                type="checkbox"
                            />
                        </div>
                    </div>
                    <p className="text-center text-black mb-4">
                        Already Have An Account? <Link to="/login" className="text-black underline">Login</Link>
                    </p>
                    <button type="submit" className="text-black btn btn-block btn-sm bg-blue-500 w-full">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
