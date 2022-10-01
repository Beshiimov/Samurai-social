import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  initialLoadUsers,
  isLoad,
  setPage,
  unFollow,
} from "../../../Redux/usersPage-reducer";
import Preloader from "../../GeneralComponents/Preloader/Preloader";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.initialLoadUsers(this.props.page);
  }

  componentWillUnmount() {
    this.props.isLoad(true);
  }

  render() {
    if (this.props.error) {
      return (
        <div className="center">
          Something Going Wrong, Please Check your Internet Connection
        </div>
      );
    }
    return (
      <>{this.props.isLoading ? <Preloader /> : <Users {...this.props} />}</>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPageReducer.users,
    page: state.usersPageReducer.page,
    totalCount: state.usersPageReducer.totalCount,
    isLoading: state.usersPageReducer.isLoading,
    error: state.usersPageReducer.error,
    disabledFollowButtons: state.usersPageReducer.disabledFollowBtn,
  };
};

const mapDispatchToProps = {
  initialLoadUsers,
  setPage,
  follow,
  unFollow,
  isLoad,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
