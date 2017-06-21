import React from "react";
import "./PostPreview.css";

function PostPreview(props) {
  return (
    <div>
      {props.post.description}
    </div>
  );
}

export default PostPreview;
