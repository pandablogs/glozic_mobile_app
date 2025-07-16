
import { useState } from 'react';
import { IoMailOutline } from "react-icons/io5";
import { PiLockKey } from "react-icons/pi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Login() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {/* <div className="w-100 min-vh-100 d-inline-block" style={{ padding: '15px 40px', background: '#f5f5f5' }}>
                <h2 style={{ fontSize: '17px' }}>Please Log in</h2>
                <div className="padd">
                    <div className='cardForm mx-auto'>
                        <div className='text d-flex p-1'>
                            <div className='px-2'>
                                <IoMailOutline className='red' />
                            </div>
                            <input type="text" placeholder='Email' className='border-0' />
                        </div>
                        <div className='text d-flex p-1 my-4'>
                            <div className='px-2'>
                                <IoMailOutline className='red' />
                            </div>
                            <input type="text" placeholder='Email' className='border-0' />
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="login-page">

                {/* Main Form */}
                <div className="d-flex flex-column align-items-center justify-content-start px-3 py-4">
                    <h6 className="fw-bold text-uppercase mb-3" style={{ width: '100%', maxWidth: '430px', fontSize: '15px' }}>Please Log In</h6>

                    <div className="cardForm bg-white p-4 rounded shadow-sm">
                        {/* Email Input */}
                        <div className="inputWrapper mb-3">
                            <IoMailOutline className="text-danger icon" />
                            <input type="email" placeholder="EMAIL" className="form-control input border-0 shadow-none loginInput" />
                        </div>

                        {/* Password Input */}
                        <div className="inputWrapper mb-3">
                            <PiLockKey className="text-danger icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="PASSWORD"
                                className="form-control input border-0 shadow-none loginInput"
                            />
                            <span
                                className="icon toggle-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <BsEye className="text-danger" /> : <BsEyeSlash className="text-danger" />}
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-danger rounded-pill me-2  cs_btn">LOG IN</button>
                            <button className="btn rounded-pill  cs_btn text-white" style={{ background: '#787777' }}>CANCEL</button>
                        </div>

                        {/* Footer Links */}
                    </div>
                    <div className="text-end mt-5 small" style={{ width: '100%', maxWidth: '430px' }}>
                        <Link to="#" className="text-danger text-decoration-none me-2">Register</Link>|
                        <Link to="#" className="text-danger text-decoration-none mx-2">Forgot Password</Link>|
                        <Link to="#" className="text-danger text-decoration-none ms-2">Install App</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login