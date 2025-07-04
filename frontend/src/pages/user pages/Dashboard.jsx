import React from "react";
import Sidebar from "./component/SidebarUser";
import NavbarUser from "./component/NavbarUser";

const Dashboard = ({ setToken }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar setToken={setToken}/>
      </div>
      <div className="w-full">
        <NavbarUser />
        <div>
          <div className="flex">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
