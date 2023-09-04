import { Navigate, Outlet } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'


const PrivateRoute = () => {

    const { isAuthenticated } = useAuth0();

    window.alert('User has to be logged to navigate to the profile area.');
     return isAuthenticated ?(<Navigate to={'/'}></Navigate>): <Outlet />
};

export default PrivateRoute;