import Messages from "./Messages";
import { sendMessage, updatenewMessageBody } from "../../Redux/MessagesReducer";
import { connect } from "react-redux";
import { AuthWithRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.MessagesPage.dialogsData,
    chatData: state.MessagesPage.chatData,
    newMessageBody: state.MessagesPage.newMessageBody,
  };
};

compose(
  connect(
    mapStateToProps,
    {
      updatenewMessageBody,
      sendMessage,
    }
    ),
  AuthWithRedirect
)(Messages);
export default compose(
  connect(
    mapStateToProps,
    {
      updatenewMessageBody,
      sendMessage,
    }
    ),
  AuthWithRedirect
)(Messages);;
