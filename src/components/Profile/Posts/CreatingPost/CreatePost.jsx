import React from "react";
import styles from "./CreatePost.module.css";
import PostsWasMade from "../PostOfUser/PostsOfUsers";


const PostsOfUser = (props) => {
  let newPostData = props.PostData.map((text) => (
    <PostsWasMade
      message={text.text}
      likecount={text.likescount}
      id={text.id}
      key ={text.id}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      <div className={styles.pad}>My Posts</div>
      <div className={styles.item}>
        <textarea autoFocus
        className={styles.textarea}
          onChange={onChangePost}
          ref={newPostElement}
          value={props.newPotstText}
        />
        <div>
          <button className={styles.buttonFollow} onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={styles.post}>{[newPostData]}</div>
    </div>
  );
};

export default PostsOfUser;
