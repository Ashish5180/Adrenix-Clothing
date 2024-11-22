import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBox, FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null); // Initialize user as null
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser.user); // Set user to the nested user object
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
        setLoading(false); // Set loading to false after fetching
    }, []);

    // Show loading state while fetching
    if (loading)
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-extrabold text-3xl">
                Fetching Your Dashboard...
            </div>
        );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 pb-12"> {/* Added pb-12 */}
            {/* Header Section */}
            <motion.div
                className="py-10 px-6 bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-extrabold tracking-wide">
                    Welcome, {user ? user.name : "Guest"}!
                </h1>
                <p className="text-lg mt-4 opacity-80">
                    Your personalized dashboard awaits.
                </p>
                <motion.div
                    className="mt-6 flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <motion.button
                        className="bg-white text-indigo-500 px-6 py-3 rounded-full font-medium text-lg shadow-lg hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Now
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Dashboard Grid */}
            <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Your Orders */}
                <Link to="order">
                    <motion.div
                        className="relative group bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500 p-6 rounded-2xl shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-yellow-300 opacity-10 blur-lg rounded-full group-hover:animate-pulse"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <FaBox className="text-6xl text-white drop-shadow-md mb-4" />
                            <h2 className="text-2xl font-bold">Your Orders</h2>
                            <p className="text-white opacity-90">
                                Track, return, or reorder items with ease.
                            </p>
                        </div>
                    </motion.div>
                </Link>

                {/* Your Addresses */}
                <Link to="address">
                    <motion.div
                        className="relative group bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 p-6 rounded-2xl shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-blue-300 opacity-10 blur-lg rounded-full group-hover:animate-pulse"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <FaHome className="text-6xl text-white drop-shadow-md mb-4" />
                            <h2 className="text-2xl font-bold">Your Addresses</h2>
                            <p className="text-white opacity-90">
                                Manage and update your saved addresses.
                            </p>
                        </div>
                    </motion.div>
                </Link>

                {/* Account */}
                <Link to="account">
                    <motion.div
                        className="relative group bg-gradient-to-br from-gray-700 via-gray-800 to-black p-6 rounded-2xl shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-10 blur-lg rounded-full group-hover:animate-pulse"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <AiOutlineLogout className="text-6xl text-white drop-shadow-md mb-4" />
                            <h2 className="text-2xl font-bold">Account</h2>
                            <p className="text-white opacity-90">
                                Logout or deactivate your account securely.
                            </p>
                        </div>
                    </motion.div>
                </Link>
            </div>

            {/* Nested Routes */}
            <motion.div
                className="mt-12 h-full mx-auto max-w-5xl px-6 py-8 bg-gray-800 rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Outlet />
            </motion.div>
        </div>
    );
};

export default Dashboard;
