// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import Loader from '../component/loginPreloader'
import { doc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
function Register() {
    const [ email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ Lastname, setFname] = useState("")
    const [Firstname, setLname] = useState("")
    const [loading, setLoader] = useState(false)
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            setLoader(true)
                
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstname: Firstname,
                    lastname:Lastname
                })
            }
            // console.log(user);
            toast.success("User Registered Successfully", 
                {
                    position: "top-center",
                    onClose: () => {
                        setLoader(false)
                    }
                }
            )
            setTimeout(() => {
            navigate('/')

            }, 4000)
        } catch (error) {
            setLoader(false)
            console.log(error.messsage);
                toast.error(error.message, 
                {
                    position: "bottom-center"
                }
            )
        }
        
    }
    return (
        <div className=''>
            <form onSubmit={handleRegister} className="flex mx-4 max-w-md md:my-10 my-3 md:w-[70%] md:mx-auto flex-col gap-4">
                <div>
                    <p className="m-0 text-start text-black md:text-[30px]">Register</p>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="fname" value="First Name" />
                    </div>
                    <TextInput onChange={(e) => setLname(e.target.value)} id="fname" type="text" placeholder="First Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="lname" value="Last Name" />
                    </div>
                    <TextInput onChange={(e) => setFname(e.target.value)} id="lname" type="text" placeholder="Last Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput onChange={(e) => setEmail(e.target.value)} id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput onChange={(e) => setPassword(e.target.value)} id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">{ loading ? <Loader/> : "Submit" }</Button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Register;