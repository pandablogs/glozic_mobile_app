import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Header from "../component/Header";
import { useEffect, useState } from "react";
import logo from '../assets/images/logo.png'
import '../App.css';

function AllRoutes() {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000)
    }, [])

    return (
        <>
            {
                loading ?
                    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
                        <div>
                            <div className="loading mx-auto">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src={logo} alt="logo" className='object-fit-contain ms-3' style={{ width: '260px' }} />
                        </div>
                    </div>
                    :
                    <>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Login />}></Route>
                        </Routes>
                    </>
            }
        </>
    )
}

export default AllRoutes;