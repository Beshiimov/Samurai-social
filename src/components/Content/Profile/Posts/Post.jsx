import s from "./Post.module.css";
const logo =
  "https://cdnb.artstation.com/p/assets/images/images/042/294/463/large/tomislav-juric-sexysquidward.jpg?1634112113";

const Post = (props) => {
  return (
    <div>
      <div className={s.post}>
        <img src={logo} alt="My Ava" />
        <div className={s.text}>
          <div>{props.message}</div>
          <div>{props.likes}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
