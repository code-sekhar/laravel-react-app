import React from "react";
import DashboardLayout from "../../../shared/DashboardLayout";
const Dashboard = () => {
    return (
        <>
            <div className="parrentView">
                <div className="container-fluid">
                    <div className="row">
                        <h1>Hello Dashboard</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
Dashboard.layout = page => <DashboardLayout children={page} title="Dashboard" />
