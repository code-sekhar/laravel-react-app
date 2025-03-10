import React from "react";
import Layout from "../shared/Layout";
const Service = () => {
    return (
        <>
            <div>
                <h1>Service</h1>
            </div>
        </>
    );
}

export default Service;
Service.layout = page => <Layout children={page} title="Service" />
