import React from "react";
import classes from "../Friends.module.css";

const FuncFriends = (props) => {
  return (
    <div>
      <div className={classes.pictur + " " + classes.flexpic}>
        {props.imgfriends}{props.name}
      </div>
    </div>
  );
};
export default FuncFriends;
