// import { PiLockKey } from "react-icons/pi";
// import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from 'react';
import '../assets/css/text.css';
import { ErrorMessage, Field } from 'formik';

function Password({ placeholder, icon, hidePassword, showPassword, name }) {

    const [showHidePassword, setShowHidePassword] = useState(false);

    return (
        <>
            {/* <div className="inputWrapper mb-3">
                <div className="text-danger icon">{icon}</div>
                <input
                    type={showHidePassword ? "text" : "password"}
                    placeholder={placeholder}
                    className="form-control input border-0 shadow-none loginInput"
                />
                <span
                    className="icon toggle-icon"
                    onClick={() => setShowHidePassword(!showHidePassword)}
                >
                    {showHidePassword ? <div className="text-danger">{hidePassword}</div> : <div className="text-danger">{showPassword}</div>}
                </span>
            </div> */}
            <div style={{ marginBottom: '20px' }}>
                <div className={`inputCustom floating-label-wrapper ${name ? '' : 'filled'} `}>
                    <div className="icon text-danger">{icon}</div>
                    {/* <PiLockKey className="text-danger icon" /> */}
                    <Field
                        type={showHidePassword ? "text" : "password"}
                        placeholder=" "
                        name={name}
                        className="form-control input border-0 shadow-none"
                    />
                    <div
                        className="toggle-password"
                        onClick={() => setShowHidePassword(!showHidePassword)}
                    >
                        {showHidePassword ? <span className="red">{hidePassword}</span> : <span className="red">{showPassword}</span>}
                    </div>
                    <label className="floating-label">{placeholder}</label>
                </div>
                <ErrorMessage className='red' component='span' name={name} style={{ fontSize: '14px' }} />
            </div>
        </>
    )
}

export default Password;