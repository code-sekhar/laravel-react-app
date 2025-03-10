import React from "react";
import Layout from "../shared/Layout";
const Blog = () => {
    return (
        <>
            <div>
                <h1>Blog</h1>
            </div>
        </>
    );
}

export default Blog;
Blog.layout = page => <Layout children={page} title="Blog" />
