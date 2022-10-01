import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { login, logout } from "../../Redux/auth-reducer";

class HeaderClass extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.userData.login,
  };
};

export default connect(mapStateToProps, { login, logout })(HeaderClass);
