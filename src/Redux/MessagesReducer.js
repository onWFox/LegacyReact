const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "igoricra",
    },
    {
      id: 2,
      name: "Andrey",
    },
    {
      id: 3,
      name: "Kak - prosto",
    },
    {
      id: 4,
      name: "RabotauForFood",
    },
    {
      id: 5,
      name: "Ig",
    },
  ],
  chatData: [
    {
      id: 1,
      text: "Hi",
    },
    {
      id: 2,
      text: "Гдi ДЕНЬГИ?",
    },
    {
      id: 3,
      text: "а?",
    },
  ],
  newMessageBody: "",
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: { ...state.newMessageBody },
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        chatData: [...state.chatData, { id: body, text: body }],
      };
    default:
      return state;
  }
};
export const sendMessage = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updatenewMessageBody = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export default MessagesReducer;
