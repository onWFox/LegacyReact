const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
import { usersAPI } from "../API/api";
let initialState = {
  PostData: [
    {
      id: 1,
      text: "Hi",
      likescount: 69,
    },
    {
      id: 2,
      text: "I really like it",
      likescount: 2280077,
    },
  ],
  newPotstText: "igoricra228",
  profile: null,
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPotstText = state.newPotstText;
      return {
        ...state,
        PostData: [
          ...state.PostData,
          { id: newPotstText, text: newPotstText, likescount: 0 },
        ],
        newPotstText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPotstText: action.NewText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,  
      };
    default:
      return state;
  }
};

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    NewText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setProfileData = (userid) => {
  return (dispatch) => {
    usersAPI.setProfileData(userid).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default ProfileReducer;
