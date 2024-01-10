import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";

let store = {
  _state: {
    ProfilePage: {
      PostData: [
        {
          id: 1,
          text: "Hi",
          likescount: 69,
        },
        {
          id: 2,
          text: "I really like it",
          likescount: 2280077,
        },
      ],
      newPotstText: "igoricra228",
    },
    MessagesPage: {
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
    },
    // friendsimg: [
    //   {
    //     id: 1,
    //     imgfriends: <img src="Public/Ava.PNG" />,
    //     name: <div>Igoricra</div>,
    //   },
    //   {
    //     id: 2,
    //     imgfriends: (
    //       <img src="https://i.pinimg.com/736x/49/59/ca/4959cae7cbd9959b28c7d4f183dcbe6d.jpg" />
    //     ),
    //     name: <div>Andrey</div>,
    //   },
    //   {
    //     id: 3,
    //     imgfriends: <img src="https://i.stack.imgur.com/I6coC.jpg" />,
    //     name: <div>Nona</div>,
    //   },
    // ],
  },
  _callsubcriber() {
    console.log("blyat");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callsubcriber = observer; // observer -это наблюдатель. Он передаёт значение функции reRenderEntireTree из App.jsx, чтобы ныне имеющиеся функции коретно работали.
  },
  dispatch(action) {
    this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
    this._state.MessagesPage = MessagesReducer(
      this._state.MessagesPage,
      action
    );

    this._callsubcriber(this._state);
  },
};

export default store;
