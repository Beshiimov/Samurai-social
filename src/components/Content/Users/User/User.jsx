import s from "../Users.module.css";
import FollowButton from "./FollowBtn/FollowButton";
import { NavLink } from "react-router-dom";

const defaultAvatarUrl = "https://image.emojipng.com/971/35971.jpg";

const User = (props) => {
  const handleFollow = (followStatus, id) => {
    followStatus ? props.unFollow(id, false) : props.follow(id, true);
  };

  return (
    <>
      {props.users.map((u) => (
        <div className={s.user} key={u.id} id={u.id}>
          <div className={s.user__left_wrap}>
            <NavLink className={s.avatar} to={`/profile/${u.id}`}>
              <img
                src={
                  u.photos && u.photos.small ? u.photos.small : defaultAvatarUrl
                }
                alt="avatar"
              />
            </NavLink>

            <FollowButton
              u={u}
              handleFollow={handleFollow}
              disabledFollowButtons={props.disabledFollowButtons}
            />
          </div>

          <div className={s.about}>
            <div className={s.user__title}>{u.name}</div>
            <div className={s.user__status}>{u.status}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
