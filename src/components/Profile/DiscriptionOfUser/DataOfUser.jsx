import React from "react";

import styles from "./DataOfUser.module.css"

import PictureUp from "./MainImage/PictureUp"
import Avatar from "./Avatar/Ava";

const DataOfUser = (props) =>{
    return(
        <div>
            <div className={styles.wrapper_userinfo}> 
                <PictureUp/>
                <Avatar profile={props.profile}/>
            </div>
        </div>
    )
}
export default DataOfUser