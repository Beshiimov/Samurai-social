import s from "./Weather.module.css";
import Preloader from "../../GeneralComponents/Preloader/Preloader";

const Weather = (props) => {
  return (
    <>
      {props.isLoad ? (
        <Preloader />
      ) : (
        <div className={s.weather} title={props.description}>
          <div className={s.title}>{props.address}</div>
          <div className={s.temp}>{props.temp}</div>
        </div>
      )}
    </>
  );
};

export default Weather;
