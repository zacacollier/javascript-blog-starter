import React from "react";
import "./ListOfPosts.css";

// eslint-disable-next-line
function ListOfPosts(props) {
  return (
    <div>
      {
        props.posts.map((post, i) =>
          <div key={i}>
            {post.description}
          </div>
        )
      }
    </div>
  );
}

export default ListOfPosts;
