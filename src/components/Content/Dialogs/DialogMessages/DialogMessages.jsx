const DialogMessages = (props) => {
  return props.messages.map((m, i) => (
    <div key={i} id={m.id}>
      {m.message}
    </div>
  ));
};

export default DialogMessages;
