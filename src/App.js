import { Navigate, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import Nav from "./components/Nav/Nav";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/*" element={<Navigate to="/me" />} />
          <Route path="/:id" element={<ProfileContainer />} />
          <Route path="/profile/:id" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
