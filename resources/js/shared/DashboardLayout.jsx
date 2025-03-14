import React from "react";
import Sideber from "../include/Sideber/Sideber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DashboardLayout =({title,children})=>{
    return (
        <>
        <ToastContainer position="top-right" autoClose={3000} />
            <div className="parrent-class">
                <div className="inner-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-xl-3">
                                <Sideber/>
                            </div>
                            <div className="col-lg-8 col-xl-9">
                                <div className="main_content_page">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashboardLayout;
