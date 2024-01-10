const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGOL_IS_FETCHING = "TOGGOL-IS-FETCHING";
const DISABLEING_BUTTON = "DISABLEING-BUTTON";
import { usersAPI } from "../API/api";
let initialState = {
  users: [],
  countUsers: 9,
  totalCountUsers: 45,
  currentPage: 1,
  isFetching: false,
  disableingButton: [],
};

export const SearchNewUsersReduscer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userid) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userid) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCountUsers: action.totalCountUsers };
    case TOGGOL_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
    case DISABLEING_BUTTON:
      return {
        ...state,
        disableingButton: action.isFetching
          ? [...state.disableingButton, action.userid]
          : state.disableingButton.filter((id) => id != action.userid),
      };
  }
};

export const followSuccess = (userid) => {
  return { type: FOLLOW, userid };
};
export const unfollowSuccess = (userid) => {
  return {
    type: UNFOLLOW,
    userid,
  };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalCount = (totaluserscount) => {
  return { type: SET_TOTAL_USERS_COUNT, totaluserscount };
};
export const toggolIsFetching = (isFetching) => {
  return { type: TOGGOL_IS_FETCHING, isFetching };
};
export const disableButton = (isFetching, userid) => {
  return { type: DISABLEING_BUTTON, isFetching, userid };
};

export const getUsers = (currentPage = 1, countUsers = 9) => {
  return (dispatch) => {
    dispatch(toggolIsFetching(true));
    usersAPI.getUsers(currentPage, countUsers).then((data) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(toggolIsFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};
export const follow = (userid) => {
  return (dispatch) => {
    dispatch(disableButton(true, userid));
    usersAPI.follow(userid).then((response) => {
      dispatch(disableButton(false, userid));
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userid));
      }
    });
  };
};
export const unfollow = (userid) => {
  return (dispatch) => {
    dispatch(disableButton(true, userid));
    usersAPI.unfollow(userid).then((response) => {
      dispatch(disableButton(false, userid));
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userid));
      }
    });
  };
};

export default SearchNewUsersReduscer;
