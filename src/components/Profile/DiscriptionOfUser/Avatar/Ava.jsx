import React from "react";

import styles from "./Avatar.module.css";
import Preloader from "../../../SearchNewUsers/Preloader/Preloader";


const Avatar = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.styleOf}>
      <div className={styles.styleOfAva}>
        <img src={props.profile.photos.small} alt="" />
      </div>
    </div>
  );
};

export default Avatar;
