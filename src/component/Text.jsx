// import { IoMailOutline } from "react-icons/io5";
import '../assets/css/text.css';
import { ErrorMessage, Field } from 'formik';

function Text({ icon, placeholder, name }) {

    return (
        <>
            {/* <div className=" inputWrapper mb-3">
                <div className="text-danger icon" >{icon}</div> */}
            {/* <IoMailOutline /> */}
            {/* <input type="email" placeholder={placeholder} className="form-control input border-0 shadow-none loginInput" />
            </div> */}
            <div style={{ marginBottom: '20px' }}>
                <div className={`inputCustom floating-label-wrapper ${name ? '' : 'filled'}`} >
                    <div className="icon text-danger">{icon}</div>
                    <Field
                        type="text"
                        className="form-control input border-0 shadow-none"
                        name={name}
                        placeholder=" "
                    />
                    <label className="floating-label">{placeholder}</label>
                </div>
                <ErrorMessage className='red' component='span' name={name} style={{ fontSize: '14px' }} />
            </div>
        </>
    )
}

export default Text;