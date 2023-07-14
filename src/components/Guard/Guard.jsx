import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


export default ()=> {
    const isAuth = useSelector((store) => store.token);
    return isAuth ? <Outlet /> : <Navigate to="/login"/>
}