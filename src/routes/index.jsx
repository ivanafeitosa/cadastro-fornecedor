import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Fornecedores from "../pages/Dashboard/Fornecedores";


const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AdminLayout />}>

                </Route>
                <Route path={"/dashboard"} element={<DashboardLayout />}>
                    <Route path={"/dashboard/fornecedores"} element={<Fornecedores />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;