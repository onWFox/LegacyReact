const FRIENDS_IMG = "FRIENDS-IMG";

let initialState = {
  friendsimg: [
    {
      id: 1,
      imgfriends: <img src="Public/Ava.PNG" />,
      name: <div>Igoricra</div>,
    },
    {
      id: 2,
      imgfriends: (
        <img src="https://i.pinimg.com/736x/49/59/ca/4959cae7cbd9959b28c7d4f183dcbe6d.jpg" />
      ),
      name: <div>Andrey</div>,
    },
    {
      id: 3,
      imgfriends: <img src="https://i.stack.imgur.com/I6coC.jpg" />,
      name: <div>Nona</div>,
    },
  ],
};

export const FriendsNavReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_IMG:
      return state;
    default:
      return state;
  }
};
