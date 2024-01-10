import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setProfileData } from "../../Redux/ProfileReducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userid = this.props.router.params.userid;
    if (!userid) {
      userid = 2;
    }
    this.props.setProfileData(userid);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    setProfileData,
  }),
  withRouter,
  // AuthWithRedirect
)(ProfileContainer);
