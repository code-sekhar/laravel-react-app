import React from "react";
import Layout from "../shared/Layout";
const About = () => {
    return (
        <>
            <div>
                <h1>About</h1>
            </div>
        </>
    );
}

export default About;
About.layout = page => <Layout children={page} title="About" />
