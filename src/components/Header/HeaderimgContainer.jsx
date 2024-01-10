import React from "react";
import Header from "./Headerimg";
import { connect } from "react-redux";
import { setLogin } from "../../Redux/Auth-Reducer";

class HeaderimgContainer extends React.Component {
  componentDidMount() {
    
     this.props.setLogin()
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.id,
  isFetching: state.auth.isFetching,
});
export default connect(mapStateToProps, {setLogin})(
  HeaderimgContainer
);
