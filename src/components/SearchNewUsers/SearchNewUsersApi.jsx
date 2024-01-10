import React from "react";
import SearchNewUsers from "./SearchNewUsers";
import { usersAPI } from "../../API/api";

class SearchNewUsersApi extends React.Component {
  componentDidMount() {
    this.props.getUsers()
    // this.props.toggolIsFetching(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.countUsers)
    //   .then((data) => {
    //     this.props.toggolIsFetching(false);
    //     this.props.setUsers(data.items);
    //   });
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber,this.props.countUsers)
  //   this.props.toggolIsFetching(true);
  //   this.props.setCurrentPage(pageNumber);

  // usersAPI.getUsers(pageNumber, this.props.countUsers).then((data) => {
  //     this.props.toggolIsFetching(false);
  //     this.props.setUsers(data.items);
  //   });
  };

  render() {
    return (
      <>
        <SearchNewUsers
          onPageChanged={this.onPageChanged.bind(this)}
          totalCountUsers={this.props.totalCountUsers}
          countUsers={this.props.countUsers}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          disableButton={this.props.disableButton}
          disableingButton={this.props.disableingButton}
        />
      </>
    );
  }
}

export default SearchNewUsersApi;
