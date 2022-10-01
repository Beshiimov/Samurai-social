import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  sendMessage,
  updateMessageValue,
} from "../../../Redux/dialogsPage-reducer";
import { compose } from "redux";
import { withAuth } from "../../HOC/withAuth";

const mapStateToProps = (state) => {
  return {
    dialogUsers: state.dialogsPage.dialogs,
    dialogMessages: state.dialogsPage.messages,
    text: state.dialogsPage.newMessageValue,
  };
};

const mapDispatchToProps = {
  sendMessage,
  updateMessageValue,
};

export default compose(
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
