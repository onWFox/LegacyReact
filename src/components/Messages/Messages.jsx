import React from "react";
import styles from "./Messages.module.css";

import MessagesItem from "./MessagesItem/MessagesItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let messagesElements = props.dialogsData.map((dialog) => (
    <MessagesItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  ));

  let chatElement = props.chatData.map((message) => (
    <Message message={message.text} id={message.id} key={message.id}/>
  ));
  let newMessageBody = props.newMessageBody;

  let onMessageChange = (event) => {
    let body = event.target.value;
    props.updatenewMessageBody(body);
  };

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_item}>
        <div>{[messagesElements]}</div>
      </div>
      <div className={styles.chats}>
        <div>{[chatElement]}</div>
        <div>
          <div>
            <textarea className={styles.textarea}
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onMessageChange}
            ></textarea>
          </div>
          <div>
            <button className={styles.buttonFollow} onClick={onSendMessageClick}>Send Message</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Messages;
