import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  disableButton,
  getUsers
} from "../../Redux/SearchNewUsersReduscer";
import SearchNewUsersApi from "./SearchNewUsersApi";

const mapStateToProps = (state) => {
  return {
    getUsers: state.usersPage.getUsers,
    users: state.usersPage.users,
    countUsers: state.usersPage.countUsers,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    disableingButton: state.usersPage.disableingButton,
    disableButton: state.usersPage.disableButton,
  };
};

const PageSearchUsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  disableButton,
  getUsers,
})(SearchNewUsersApi);

export default PageSearchUsersContainer;
