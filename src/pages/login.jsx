// import LoginBg from '../assets/login.svg'
// import Initials from '../assets/initials.svg'
// import { Link } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Login() {
    return (
        <div>
            <form className="flex md:w-[80%] mx-auto md:my-16 my-8 max-w-md flex-col gap-4">
                <div>
                    <p className="m-0 text-start text-black md:text-[30px]">Login</p>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>

        </div>
    );
}

export default Login;