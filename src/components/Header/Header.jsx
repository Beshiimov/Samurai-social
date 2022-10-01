import logo from "../../assets/logo.png";
import s from "./Header.module.css";
import WeatherContainer from "./Weather/WeatherContainer";
import LoginBtn from "./LoginBtn/LoginBtn";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />

      <WeatherContainer />

      <LoginBtn
        isAuth={props.isAuth}
        login={props.login}
        logout={props.logout}
      />
    </header>
  );
};

export default Header;
