import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from '../pages/Layout';
import { HomePage } from "../pages/HomePage";
import { Profile } from "../pages/Profile";
import PublicRoute from "../router/Public.routes";
import PrivateRoute from "../router/Private.routes";
import ErrorRoute from "../router/Error.routes";


export const RouterPaths = () => {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route path="/" element={<PublicRoute />}>
                        <Route index element={<HomePage />} />
                    </Route>

                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="*" element={<ErrorRoute />} />


                </Route>


            </Routes>

        </BrowserRouter>
    )
}
