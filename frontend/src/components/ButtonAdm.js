export const ButtonAdm = (props) => {
  //   const btnStyle = props.style;
  return (
    <div className="button-admin" style={{ backgroundColor: props.btnStyle }}>
      <button>{props.text}</button>
      <i className={props.icon}></i>
    </div>
  );
};
