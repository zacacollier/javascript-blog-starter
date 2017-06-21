import React from "react";
import "./PostDetail.css";

function PostDetail(props) {
  return (
    <div
      style={{
        display: props.post.description ? "flex" : "none"
      }}
    >
      {props.post.description ? props.post.description : "no description"}
    </div>
  );
}

export default PostDetail;
