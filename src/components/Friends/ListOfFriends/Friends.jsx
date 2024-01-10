import React from "react";
import classes from "../Friends.module.css";
import FuncFriends from "./FuncFriends";
let friendsimg = [
  //Костыль
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
  {
    id: 4,
    imgfriends: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcutYZ2je_WXUYOM7X2CkXIna96HyNqAQiA&usqp=CAU' />,
    name: <div>Lena</div>,
  }
];

let ListOfFriends = (props) => {
  let friendsimgnew = friendsimg.map((img2) => (
    <FuncFriends id={img2.id} imgfriends={img2.imgfriends} name={img2.name} key={img2.id} />
  ));
  let nameList = friendsimg.map((img2) => (
    <FuncFriends id={img2.id} name={img2.name} key={img2.id}/>
  ));
  return (
    <div>
      <div className={classes.item}>
        <div>
          <div className={classes.picture + " " + classes.flexpic}>
            {friendsimgnew}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfFriends;
