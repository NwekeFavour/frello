/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect, createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

// Create the Auth Context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user); // Set the current user
            setLoading(false);    // Stop loading once the user is determined
        });

        return unsubscribe; // Cleanup subscription on unmount
    }, []);

    const value = { currentUser };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Render children only after loading */}
        </AuthContext.Provider>
    );
};
