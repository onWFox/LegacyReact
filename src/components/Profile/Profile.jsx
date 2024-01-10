import React from "react";
import CreatePostContainer from "./Posts/CreatingPost/CreatePostContainer";
import DataOfUser from "./DiscriptionOfUser/DataOfUser";

const Profile = (props) => {
  return (
    <div>
      <DataOfUser profile ={props.profile}/>
      <CreatePostContainer />
    </div>
  );
};
export default Profile;
