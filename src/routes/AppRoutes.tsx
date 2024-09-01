import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import Dashboard from "../pages/Dashboard";

/**
 * The routes for my application
 * 
 * @returns: The specified routes to be used throughout the application
 */

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>

                {/* Dashboard below is a protected route
                <Route path="/dashboard" element={<Dashboard />}></Route> */}
        </Routes>
    )
};
export default AppRoutes;
