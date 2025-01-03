// import LoginBg from '../assets/login.svg'
// import Initials from '../assets/initials.svg'
// import { Link } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../component/loginPreloader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
function Login() {
    const [ email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoader] = useState(false)
    const [error, setError] = useState()
    const navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        setLoader(true)
            
        try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        } catch (error) {
            setTimeout(() =>{
                setLoader(false)
            }, 2000)
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorCode, errorMessage)
        }
    }
    return (
        <div>
            <form onSubmit={onLogin} className="flex mx-4 md:w-[80%] md:mx-auto md:my-16 my-8 max-w-md flex-col gap-4">
                <div>
                    <p className="m-0 text-start text-black md:text-[30px]">Login</p>
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
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <div>
                        <Link className="text-black hover:text-blue-800" to="/register">Register</Link>
                    </div>
                </div>
                <p className="m-0 text-red-800">{ error }</p>
                <Button type="submit">{ loading ? <Loader/> : "Submit" }</Button>
            </form>

        </div>
    );
}

export default Login;