import HeaderDash from "../../components/HeaderDash";
import { Outlet } from "react-router-dom";
import MobileSidebarDash from "../../components/MobileSidebarDash";



const DashboardLayout = () => {
    return(
        <div className="h-screen flex flex-column md:flex-row">
            <HeaderDash />
            <MobileSidebarDash />
            <div className="p-6 flex-1 overflow-auto">
                <Outlet />
            </div>
            
        </div>
    );
}

export default DashboardLayout;