import "./style.scss";

export default function MessageBox(props) {
  return (
    <>
      <br />
      <span className="message-box">
        <label className="message-header">Messages</label>
        <span className="message">
          <label>Total area: {props.totalArea}м²</label>
        </span>
        <span className="message">
          <label>Total perimeter: {props.totalPerimeter}м</label>
        </span>
        <span className="message">
          <label>{props.time}</label>
        </span>
      </span>
    </>
  );
}
