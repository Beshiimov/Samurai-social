import s from "./ProfileInfo.module.css";

const logo =
  "https://cdnb.artstation.com/p/assets/images/images/042/294/463/large/tomislav-juric-sexysquidward.jpg?1634112113";

const workStatus = (props) => {
  if (!props.isLoad) {
    return <>{props.lookingForAJob ? "Пока не работаю" : "Ищу работу"}</>;
  }
};

const checkLogo = (props) => {
  if (props.isLoad) {
    return "Load...";
  } else {
    return props.user.photos.large || logo;
  }
};

export const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileHeader}>
        <img src={checkLogo(props)} width={200} height={200} alt="Logotype" />
        <div>
          <div className={s.title}>{props.user.fullName}</div>
          <div className={s.slogan}>{props.user.aboutMe}</div>
        </div>
      </div>

      <div className={s.workStatus}>
        <h3>Статус работы: </h3>
        <span>{workStatus(props)}</span>
        <span>{props.user.lookingForAJobDescription}</span>
      </div>
    </div>
  );
};
