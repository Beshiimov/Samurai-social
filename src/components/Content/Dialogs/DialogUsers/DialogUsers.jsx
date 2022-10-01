import { NavLink } from "react-router-dom";

const DialogUsers = (props) => {
  return props.dialogs.map((m, i) => (
    <NavLink to={"/messages/" + m.id} key={i}>
      {" "}
      {m.name}{" "}
    </NavLink>
  ));
};

export default DialogUsers;
