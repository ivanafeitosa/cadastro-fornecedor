import HeaderDash from "../../components/HeaderDash";
import { Outlet } from "react-router-dom";



const DashboardLayout = () => {
    return(
        <div className="h-screen flex">
            <HeaderDash />
            <div className="p-6 flex-1 overflow-auto">
                <Outlet />
            </div>
            
        </div>
    );
}

export default DashboardLayout;