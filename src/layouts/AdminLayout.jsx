import React from "react";
import Sidebar from "../components/AdminPanel/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="content" style={{ marginLeft: "250px", padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
