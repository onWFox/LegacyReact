import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Preloader from "../SearchNewUsers/Preloader/Preloader";

const LOGIN = 'Login'

const Header = (props) => {
  return (
    <header className={styles.headerOfMain}>
      <img
        src="https://www.yiiframework.com/image/design/logo/yii3_sign.png"
        alt=""
      />
      <div className={styles.login_block}>
        {props.isFetching ? <Preloader /> : null}
        {"Имя: "}
        {props.isAuth ? props.login : <NavLink to="/login">{LOGIN}</NavLink>}
        {" Почта: "}
        {props.isAuth ? props.email : <NavLink to="/login">{LOGIN}</NavLink>}
        {" Id:"}
        {props.isAuth ? props.id : <NavLink to="/login">{LOGIN}</NavLink>}
      </div>
    </header>
  );
};
export default Header;
