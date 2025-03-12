import React from "react";
import Header from "../include/Header/Header";
import Footer from "@/include/Footer/Footer.jsx";

function Layout({ children,title }) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;
