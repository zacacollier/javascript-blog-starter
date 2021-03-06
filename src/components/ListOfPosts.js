import React from "react";
import PostPreview from "./PostPreview";
import "./ListOfPosts.css";

function ListOfPosts(props) {
  return (
    <div>
      {
        props.posts.map((post, i) =>
          <PostPreview
            key={i}
            post={post}
            handleClick={post => props.handlePostPreviewClick(post)}
          >
            {post.description}
          </PostPreview>
        )
      }
    </div>
  );
}

export default ListOfPosts;
