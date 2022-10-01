import React from "react";
import s from "../../Users.module.css";

const FollowButton = (props) => {
  const u = props.u;

  const checkFollowBtn = (u) => {
    if (props.disabledFollowButtons.some((e) => e === u.id)) return "...";
    return u.followed ? "unfollow" : "follow";
  };

  return (
    <button
      disabled={props.disabledFollowButtons.some((e) => e === u.id)}
      onClick={() => props.handleFollow(u.followed, u.id)}
      className={s.follow}
    >
      {checkFollowBtn(u)}
    </button>
  );
};

export default FollowButton;
