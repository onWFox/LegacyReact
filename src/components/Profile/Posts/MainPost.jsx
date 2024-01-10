import React from "react";

import PostsOfUser from "./CreatingPost/CreatePost";

const Post = (props) => {
  return (
    <div>
      <div>
        <PostsOfUser
          PostData={props.PostData}
          newPotstText={props.newPotstText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Post;
