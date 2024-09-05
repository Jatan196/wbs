import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { userDetails } = useSelector(store => store.user);
    return (
        <nav className="h-100 w-full flex justify-between items-center p-4 sticky top-0 bg-slate-800 text-white">
            {/* Left-aligned link */}
            <div className="flex space-x-4">
                <Link to="/"><h2>Home</h2></Link>
            </div>
            {/* Right-aligned links */}
            <div className="flex space-x-4">
                {userDetails && (
                    <div className="p-4">
                        <Link to="/profile" className="ml-4 text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded">
                            Profile
                        </Link>
                        <Link to="/login" className="ml-4 text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded">
                            Logout
                        </Link>
                    </div>
                )}
                {!userDetails && (
                    <div className="p-4 gap-2">
                        <Link to="/login" className="ml-4 text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded">
                            Login
                        </Link>
                        <Link to="/register" className="ml-4 text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded">
                            Register
                        </Link>
                    </div>
                )
                }

            </div>
        </nav>
    );
}

export default Navbar;
