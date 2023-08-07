import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from '../pages/Layout';
import { HomePage } from "../pages/HomePage";


export const RouterPaths = () => {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<HomePage />} />

                </Route>


            </Routes>

        </BrowserRouter>
    )
}
