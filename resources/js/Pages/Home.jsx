import React from "react";
import Layout from "../shared/Layout";
function Home() {
  return (
    <>
        <div>
            <h1>Home</h1>
        </div>
    </>
  );
}
export default Home;
Home.layout = page => <Layout children={page} title="Home" />
