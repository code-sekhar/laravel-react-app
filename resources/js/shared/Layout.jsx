import React from "react";
import Header from "../include/Header/Header";

function Layout({ children,title }) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
}

export default Layout;
