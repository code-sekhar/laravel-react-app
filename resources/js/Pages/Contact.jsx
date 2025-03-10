import React from "react";
import Layout from "../shared/Layout";
const Contact = () => {
    return (
        <>
            <div>
                <h1>Contact</h1>
            </div>
        </>
    );
}

export default Contact;
Contact.layout = page => <Layout children={page} title="Contact" />
