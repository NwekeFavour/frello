/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider"; // Replace with your auth context or hook

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth(); // Get the authenticated user from your AuthProvider

    if (!currentUser) {
        // If user is not authenticated, redirect to login
        return <Navigate to="/" />;
    }

    // If authenticated, render the children (protected component)
    return children;
};

export default ProtectedRoute;
