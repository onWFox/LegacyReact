import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageSearchUsers.module.css";
import userPhoto from "../../../Public/Ava.png";
import Preloader from "./Preloader/Preloader";

const SearchNewUsers = (props) => {
  let countsPages = Math.ceil(props.totalCountUsers / props.countUsers);
  let pages = [];
  for (let i = 1; i <= countsPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        <div>{props.isFetching ? <Preloader /> : null}</div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? styles.selectedpages : ""}
              key={page}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
                {page}
            </span>
          );
        })}
      </div>
      <div className={styles.wrapper}>
        {props.users.map((user) => (
          <div key={user.id} className={styles.padding}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    className={styles.userphoto}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {" "}
                {user.followed ? (
                  <button
                    className={styles.buttonFollow}
                    disabled={props.disableingButton.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    className={styles.buttonFollow}
                    disabled={props.disableingButton.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>
                  {user.name}
                  <div>
                    {user.status}
                    <div>
                      {"user.location.country"}
                      <div>{"user.location.city"}</div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchNewUsers;
