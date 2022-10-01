import s from "../Header.module.css";

const LoginBtn = (props) => {
  if (props.isAuth) {
    return (
      <div className={s.loginBtn}>
        <div>{props.isAuth}</div>
        <div className={s.dropDown}>
          <button onClick={props.logout}>Logout</button>
        </div>
      </div>
    );
  }
};

export default LoginBtn;
