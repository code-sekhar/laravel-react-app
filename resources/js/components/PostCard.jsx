import React from "react";
const PostCard =({title,content})=>{
    return(
      <>
          <div className="col-lg-12 mb-3">
              <div className="card p-3 ">
                  <div className="inner-card">
                      <h2>{title}</h2>
                      <p>{content}</p>
                  </div>
              </div>
          </div>
      </>
    );
}
export default PostCard;
