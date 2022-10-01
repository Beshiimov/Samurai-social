import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuth } from "../../HOC/withAuth";
import { withURL } from "../../HOC/withURL";
import {
  loadUserProfile,
  resetUserProfile,
} from "../../../Redux/profile-reducer";

class ProfileClass extends React.Component {
  checkUrlForRequest = (params, userdataId) => {
    if (this.props.params.id !== "me") {
      this.props.loadUserProfile(params.id);
    } else {
      this.props.loadUserProfile(userdataId);
    }
  };

  componentDidMount() {
    this.checkUrlForRequest(this.props.params, this.props.userData.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.checkUrlForRequest(this.props.params, this.props.userData.id);
    }
  }

  componentWillUnmount() {
    this.props.resetUserProfile();
  }

  render() {
    return <Profile user={this.props.user} isLoad={this.props.isLoad} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userData.id,
    userData: state.authReducer.userData,
    user: state.profileReducer.user,
    isLoad: state.profileReducer.isLoad,
  };
};

export default compose(
  withAuth,
  withURL,
  connect(mapStateToProps, { loadUserProfile, resetUserProfile })
)(ProfileClass);
