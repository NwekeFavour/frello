/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../component/loginPreloader';
const Home = () => {
    const [loading, setLoader] = useState(false)
    const navigate = useNavigate();
    const logout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            setLoader(true)
            setTimeout(() => {
                navigate('/login')
            }, 5000)
        } catch (error) {
            console.error("Logout error:", error);
            
        }

    }
    return (
        <div>
            welcome

            <Button onClick={logout}>{ loading ? <Loader/> : "Log Out" }</Button>
        </div>
    );
};

export default Home;