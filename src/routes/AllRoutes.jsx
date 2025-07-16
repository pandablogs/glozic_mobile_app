import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Header from "../component/Header";

function AllRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes;