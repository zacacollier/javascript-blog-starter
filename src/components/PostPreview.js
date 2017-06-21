import React from "react";
import "./PostPreview.css";

function PostPreview(props) {
  return (
    <div
      onClick={() => props.handleClick(props.post)}
    >
      {props.post.description}
    </div>
  );
}

export default PostPreview;
