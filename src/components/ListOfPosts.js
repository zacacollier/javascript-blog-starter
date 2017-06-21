import React from "react";
import PostPreview from "./PostPreview";
import "./ListOfPosts.css";

// eslint-disable-next-line
function ListOfPosts(props) {
  return (
    <div>
      {
        props.posts.map((post, i) =>
          <PostPreview
            key={i}
            post={post}
          >
            {post.description}
          </PostPreview>
        )
      }
    </div>
  );
}

export default ListOfPosts;
