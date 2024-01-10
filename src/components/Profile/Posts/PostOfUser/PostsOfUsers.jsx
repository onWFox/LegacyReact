import React from "react";
import classes from "./PostOfUsers.module.css";
const PostsWasMade = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img className={classes.BorderOfUser} src="Public/Ava.png" alt="" />
        {props.message}
        <div>
          <span>Like</span> {props.likecount}
        </div>
      </div>
    </div>
  );
};
export default PostsWasMade;
