
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

function PrivateRoutes() {
    const isAuth = useAuth()
    return isAuth ? <Outlet></Outlet> : <Navigate to="/users/login"></Navigate>
}


export default PrivateRoutes