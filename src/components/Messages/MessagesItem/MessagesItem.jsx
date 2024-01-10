import React from "react";
import classes from "../Messages.module.css";
import { NavLink } from "react-router-dom";

const MessagesItem = (props) => {
  //Эта функция нужна для навигации в навбаре
  let path = "/messages/" + props.id;
  return (
    <div>
      <div className={classes.dialog}>
        <NavLink
          to={path}
          className={(navData) =>
            navData.isActive ? classes.active : classes.dialog
          }
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default MessagesItem;
