import { Navigate, Outlet } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'
import { SpinnerCircular } from 'spinners-react';


const PrivateRoute = () => {

    const { isAuthenticated, isLoading } = useAuth0();

if(isLoading) return <SpinnerCircular />
if(isAuthenticated) return <Outlet />
    
     return <Navigate to={'/'}></Navigate>
};

export default PrivateRoute;