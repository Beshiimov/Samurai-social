import React from "react";
import { connect } from "react-redux";
import { auth, isLoad } from "../../Redux/auth-reducer";
import Preloader from "../GeneralComponents/Preloader/Preloader";
import { Login } from "../GeneralComponents/Login/Login";

const mapStateToProps = (state) => {
  return {
    isLoading: state.authReducer.isLoading,
    isAuth: state.authReducer.isAuthSuccess,
  };
};

export const withAuth = (Component) => {
  class checkAuth extends React.Component {
    componentDidMount() {
      if (!this.props.isAuth) {
        this.props.auth();
      }
    }

    render() {
      if (this.props.isLoading) return <Preloader />;
      if (this.props.isAuth) {
        return <Component />;
      } else return <Login />;
    }
  }

  return connect(mapStateToProps, { auth, isLoad })(checkAuth);
};
