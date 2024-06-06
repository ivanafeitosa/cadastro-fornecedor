import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";


const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AdminLayout />}>

                </Route>
                {/* <Route path={"/dashboard"} element={}>
                
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;