import { createRef } from "react";
import s from "./addPost.module.css";

const AddPost = (props) => {
  const newPostElement = createRef();

  // const addNewPost = () => {
  //   props.addNewPost();
  // };

  const updateText = () => {
    const text = newPostElement.current.value;
    props.updateTextValue(text);
  };

  return (
    <div className={s.AddPost}>
      <input
        className={s.input}
        onChange={updateText}
        ref={newPostElement}
        value={props.textValue}
      />
      <button className={s.submit}>Опубликовать</button>
    </div>
  );
};

export default AddPost;
