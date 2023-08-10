import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from '../pages/Layout';
import { HomePage } from "../pages/HomePage";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";


export const RouterPaths = () => {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<HomePage />} />
                    <Route  path="/home" element={<Home/>}/>
                    <Route  path="/profile" element={<Profile/>}/>


                </Route>


            </Routes>

        </BrowserRouter>
    )
}
