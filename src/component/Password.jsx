import { PiLockKey } from "react-icons/pi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from 'react';
import '../assets/css/text.css';

function Password({ placeholder, icon, hidePassword, showPassword }) {

    const [showHidePassword, setShowHidePassword] = useState(false);
    const [value, setValue] = useState('');

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

            <div className={`inputCustom floating-label-wrapper ${value ? 'filled' : ''} `} style={{ marginBottom: '20px' }}>
                <div className="icon text-danger">{icon}</div>
                {/* <PiLockKey className="text-danger icon" /> */}
                <input
                    type={showHidePassword ? "text" : "password"}
                    placeholder=" "
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
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
        </>
    )
}

export default Password;