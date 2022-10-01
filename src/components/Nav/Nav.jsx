import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.navlink}>
          <NavLink to="/me">Profile</NavLink>
        </li>
        <li className={s.navlink}>
          <NavLink to="/messages">Dialogs</NavLink>
        </li>
        <li className={s.navlink}>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
