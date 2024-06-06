import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";


const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AdminLayout />}>

                </Route>
                <Route path={"/dashboard"} element={<Dashboard />}>
                
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;