
import { IoMailOutline } from "react-icons/io5";
import { PiLockKey } from "react-icons/pi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Text from './Text';
import Password from './Password';
import Button from './Button';
import { useEffect, useState } from "react";

function Login({ showInstall, handleInstallClick }) {

    const [config, setconfig] = useState('');

    useEffect(() => {
        const response = {
            type: 'color', // or 'color or image'
            // value: 'https://static.vecteezy.com/system/resources/previews/001/971/264/non_2x/beautiful-cherry-blossom-with-bokeh-lights-background-concept-free-vector.jpg'
            value: '#f5f5f5'
        };

        if (response.type === 'image') {
            setconfig({
                backgroundImage: `url(${response.value})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            });
        } else if (response.type === 'color') {
            setconfig({
                backgroundColor: response.value,
            });
        }
    }, []);

    return (
        <>
            <div className={`login-page`}
                style={{
                    ...config,
                }}
            >
                <div className="d-flex flex-column align-items-center justify-content-start py-4" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                    <h6 className="fw-bold text-uppercase mb-3" style={{ width: '100%', maxWidth: '430px', fontSize: '14px' }}>Please Log In</h6>

                    <div className="cardForm bg-white rounded shadow-sm">
                        <Text icon={<IoMailOutline />} placeholder={'EMAIL'} />
                        <Password placeholder={'PASSWORD'} icon={<PiLockKey />} hidePassword={<BsEye />} showPassword={<BsEyeSlash />} />

                        <div className="d-flex justify-content-center mt-3 gap-2">
                            <Button name={'LOG IN'} bgColor={'#e61a17'} />
                            <Button name={'CANCEL'} bgColor={'#666464'} />
                        </div>

                    </div>
                    <div className="text-center" style={{ width: '100%', maxWidth: '430px', fontSize: '16px', marginTop: '35px', fontWeight: '600' }}>
                        <Link to="#" className="text-decoration-none me-1" style={{ color: '#e61a17' }}>Register</Link>|
                        <Link to="#" className="text-decoration-none mx-1" style={{ color: '#e61a17' }}>Forgot Password</Link>
                        {showInstall && (
                            <Link onClick={handleInstallClick} to="#" className="text-decoration-none ms-1" style={{ color: '#e61a17' }}><span style={{ color: 'black' }}>|</span> Install App</Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login