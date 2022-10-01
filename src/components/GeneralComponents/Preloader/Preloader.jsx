import "./Preloader.css";

const Preloader = (props) => {
  return (
    <div className="center">
      {props.text}
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
