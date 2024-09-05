import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/userSlice';
import Navbar from './navbar';

const Login = () => {
    const [user, setUser] = useState({
        email: "",  
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const res = await axios.post(`http://localhost:5000/api/v1/user/login`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(res);
            navigate("/main");
            
            toast.success(res.data.message);
            dispatch(setUserDetails(res.data.user));
        } catch (error) {
            console.log(error.response?.data?.message);
            toast.error(error.response?.data?.message);
            console.log(error);
        }

        setUser({
            email: "",
            password: "",
        });
    };

    return (
        <>
            <div className="flex flex-col p-2 w-screen h-screen">
                <div className="w-full top-0 fixed left-0 z-50">
                    <Navbar />
                </div>
                <div className="flex-grow p-2 flex items-center justify-center mt-16">
                    <div className="text-center p-6 rounded-lg shadow-md bg-gray-400 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 max-w-md w-full">
                        <h1 className="text-3xl font-bold text-center text-blue-900">Login</h1>
                        <form onSubmit={onSubmitHandler} className="text-white-700 p-4">
                            <div className="p-4">
                                <input
                                    className="input input-bordered h-10 w-full"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    type="text"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="p-4">
                                <input
                                    className="input input-bordered h-10 w-full"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="Password"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <p className="text-center p-4 text-black">
                                Don't Have An Account? <Link to="/register">Sign Up</Link>
                            </p>
                            <button type="submit" className="btn btn-block btn-sm bg-blue-500 w-full">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
