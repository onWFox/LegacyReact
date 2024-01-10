// Дополнительные импорты
import { Route, Routes } from "react-router-dom";
// Стили
import "./pages/stylesheet.css";
// Импорты компонент
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Muisc";
import Friends from "./components/Friends/FriendsMain";
//Импорты контейнерных компонет
import MessagesContainer from "./components/Messages/MessagesContainer";
import PageSearchUsersContainer from "./components/SearchNewUsers/SearchNewUsersContainer";
import HeaderimgContainer from "./components/Header/HeaderimgContainer";

import { Login } from "./Login/Login";

const App = (props) => {
  return (
    <div className="app_warpper">
      <HeaderimgContainer />
      <Navbar />
      <div className="app_wrapper_content">
        <Routes>
          <Route path="/" exact element={<ProfileContainer />} />
          <Route path="/profile/:userid?" element={<ProfileContainer />} />
          <Route path="/profile" exact element={<ProfileContainer />} />
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/searchusers" element={<PageSearchUsersContainer />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
