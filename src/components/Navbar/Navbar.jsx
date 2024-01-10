import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import ListOfFriends from "../Friends/ListOfFriends/Friends";



const Navbar = (props) => {
  return (
    <nav className={classes.nav_bar}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          LinkToProfile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/messages"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/searchusers"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Find Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/friends"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Friends
        </NavLink>



        <div>
          <ListOfFriends/>
        </div>
      </div>
      
    </nav>
  );
};
export default Navbar;
