import { Navigate } from "react-router-dom"


const ErrorRoute = () => {

    window.alert('The indicated route is not avaible.');
    return <Navigate to={'/'}></Navigate>

};

export default ErrorRoute;