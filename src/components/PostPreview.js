import React from "react";
import "./PostPreview.css";

function PostPreview(props) {
  return (
    <div
      // eslint-disable-next-line
      onClick={() => console.log(props.post.description)}
    >
      {props.post.description}
    </div>
  );
}

export default PostPreview;
