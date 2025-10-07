import { Form, Formik } from "formik";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Text from "./Text";
import Button from "./Button";
import { PiUserList } from "react-icons/pi";
import * as Yup from 'yup';

function Register() {

    const initialValues = {
        nricNo: '',
        emailAddress: ''
    }

    const validationSchema = Yup.object().shape({
        nricNo: Yup.string().required('This Field is Required.'),
        emailAddress: Yup.string().required('This Field is Required.')
    })

    const onSubmitAction = (values) => {
        console.log('values', values)
    }

    return (
        <>
            <div className={`login-page`}
                style={{
                    background: '#f5f5f5'
                }}
            >
                <div className="d-flex flex-column align-items-center justify-content-start py-4" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                    <h6 className="fw-bold text-uppercase mb-3" style={{ width: '100%', maxWidth: '430px', fontSize: '14px' }}>PLEASE ENTER N.R.I.C. TO VERIFY</h6>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmitAction}
                        validationSchema={validationSchema}
                    >
                        {() => (
                            <Form className="cardForm bg-white rounded shadow-sm">
                                {/* <div className="cardForm bg-white rounded shadow-sm"> */}
                                <Text icon={<PiUserList />} placeholder={'NRIC Number'} name={'nricNo'} />
                                <Text icon={<IoMailOutline />} placeholder={'Email Address'} name={'emailAddress'} />

                                <div className="d-flex justify-content-center mt-3 gap-2">
                                    <Button name={'Check'} bgColor={'#e61a17'} type={'submit'} />
                                    <Button name={'CANCEL'} bgColor={'#666464'} type={'button'} />
                                </div>
                                {/* </div> */}
                            </Form>
                        )}
                    </Formik>

                    <div className="text-end" style={{ width: '100%', maxWidth: '430px', fontSize: '16px', marginTop: '35px', fontWeight: '600' }}>
                        <Link to="/" className="text-decoration-none mx-1" style={{ color: '#e61a17' }}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;