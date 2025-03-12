import React from "react";
import Layout from "../shared/Layout";
import PostCard from "../components/PostCard";
const Blog = ({posts= []}) => {
    console.log("Received posts:", posts); // Debugging
    return (
        <>
            <div className="container">
                <h1>Blog</h1>
                <div className="row">
                    {posts.length>0?(
                        posts.map((post)=>(
                            <div key={post.id}>
                                <PostCard title={post.title} content={post.content}/>
                            </div>
                        ))
                    ):(
                        <div>
                            <h2>No Post Found</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Blog;
Blog.layout = page => <Layout children={page} title="Blog" />
