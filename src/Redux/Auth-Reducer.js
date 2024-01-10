const SET_USER_DATA = "SET-USER-DATA";
const TOGGOL_IS_FETCHING = "TOGGOL-IS-FETCHING";
import { usersAPI } from "../API/api";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

export const AuthReduscer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case TOGGOL_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login },
  };
};

export const toggolIsFetching = (isFetching) => {
  return { type: TOGGOL_IS_FETCHING, isFetching };
};

export const setLogin = () => {
  return (dispatch) => {
    dispatch(toggolIsFetching(true));
    usersAPI // usersAPI это условный обяект в котором лежит методы, один из таких методов это setLogin
      .setLogin()
      .then((data) => { // data - это рузультат then-а в usersAPI
        dispatch(toggolIsFetching(false));
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthUserData(id, email, login));
        } else {
          return console.log("Есть проблема. И она серьёзней, чем ты думаешь");
        }
      });
  };
};
export default AuthReduscer;
