import s from "./Background.module.css";
import BackgroundPhoto from "./Background.jpg";

const Background = () => {
  return (
    <div className={s.post}>
      <img src={BackgroundPhoto} alt="Photo" />
    </div>
  );
};

export default Background;
