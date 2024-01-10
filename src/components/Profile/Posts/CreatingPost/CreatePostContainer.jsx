import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../../Redux/ProfileReducer";
import PostsOfUser from "./CreatePost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.PostData,
    newPotstText: state.ProfilePage.newPotstText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreater(text);
      dispatch(action);
    },
  };
};

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsOfUser);

export default CreatePostContainer;
