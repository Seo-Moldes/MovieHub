import { Navigate } from "react-router-dom"
import { ErrorPage } from "../pages/ErrorPage";


const ErrorRoute = () => {

    // window.alert('The indicated route is not avaible.');
    // return <Navigate to={'/'}></Navigate>
return <ErrorPage/>
};

export default ErrorRoute;