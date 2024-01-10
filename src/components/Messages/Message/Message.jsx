import React from "react";
import classes from "../Messages.module.css";

const Message = (props) => {
  // Она принимает пропсы в виде text и id из массива chatData[]
  // А сам Message используется в методе chatElement, где пербираются text и id
  // 5 раз
  return (
    <div>
      <div className={classes.chat}>{props.message}</div>
    </div>
  );
};

export default Message;
