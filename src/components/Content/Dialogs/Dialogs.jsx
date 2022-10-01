import { createRef } from "react";
import DialogUsers from "./DialogUsers/DialogUsers";
import DialogMessages from "./DialogMessages/DialogMessages";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const newPostElement = createRef();

  const updateSendingMessageValue = () => {
    const text = newPostElement.current.value;
    props.updateMessageValue(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.users}>
        <DialogUsers dialogs={props.dialogUsers} />
      </div>
      <div className={s.messages}>
        <div className={s.chat}>
          <DialogMessages messages={props.dialogMessages} />
        </div>
        <div className={s.messages__send}>
          <input
            className={s.input}
            ref={newPostElement}
            onChange={updateSendingMessageValue}
            value={props.text}
            autoFocus
          />
          <button onClick={props.sendOnClickButton} className={s.button}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
