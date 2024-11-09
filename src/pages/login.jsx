import LoginBg from '../assets/login.svg'
import Initials from '../assets/initials.svg'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-12 p-0 vh-100 d-flex align-items-center justify-content-lg-end justify-content-center">
                    <div className="bg-light p-md-3 p-4 rounded-4 loginsect">
                        <div>
                            <img src={Initials} alt="initials-icon" />
                        </div>
                        <div className='mt-3'>
                            <label className="form-label">Email</label>
                            <input type="email" id="inputEmail5" className="form-control border-0 shadow-none rounded-3"/>
                        </div>
                        <div className='mt-4'>
                            <input type="password" id="inputPassword5" className="form-control shadow-none border-0 rounded-3" aria-describedby="passwordHelpBlock" placeholder="*******"/>
                        </div>
                        <div className='d-flex mt-4 align-items-center justify-content-between'>
                            <div>
                                <ul className='p-0 m-0 '>
                                    <li className='list-unstyled'>
                                        <Link className='text-decoration-none text-primary' to={"/forget-password"}>Forget your password?</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <p className='m-0'>Remember me</p>
                                <span className='d-flex align-items-center'>
                                    <input type="checkbox" name="remember-me" id="remember" />
                                </span>
                            </div>
                        </div>
                        <div className='container-fluid mt-4 p-0'>
                            <ul className='p-0 m-0 row'>
                                <li className='list-unstyled rounded-2 bg-primary  col-12 p-0'>
                                    <Link className='text-decoration-none py-2 d-flex justify-content-center text-white' to={"/forget-password"}>Login</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='d-flex my-4 gap-2 align-items-center justify-content-between'>
                            <div>
                                <ul className='p-0 m-0 '>
                                    <li className='list-unstyled'>
                                        <Link className='text-decoration-none text-primary' to={"/register"}>Create your account</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='d-flex gap-2'>
                                <p className='m-0'>{"Don't"} have an account</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 d-flex justify-content-center">
                    <div className='loginimage'>
                        <img className='z-1 img vh-100' width={500} src={LoginBg} alt="login-background-svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;