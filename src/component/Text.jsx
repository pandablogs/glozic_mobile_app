// import { IoMailOutline } from "react-icons/io5";
import { useState } from 'react';
import '../assets/css/text.css';

function Text({ icon, placeholder }) {

    const [value, setValue] = useState('');

    return (
        <>
            {/* <div className=" inputWrapper mb-3">
                <div className="text-danger icon" >{icon}</div> */}
            {/* <IoMailOutline /> */}
            {/* <input type="email" placeholder={placeholder} className="form-control input border-0 shadow-none loginInput" />
            </div> */}

            <div className={`inputCustom floating-label-wrapper ${value ? 'filled' : ''}`} style={{ marginBottom: '20px' }}>
                <div className="icon text-danger">{icon}</div>
                <input
                    type="email"
                    className="form-control input border-0 shadow-none"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder=" "
                />
                <label className="floating-label">{placeholder}</label>
            </div>
        </>
    )
}

export default Text;