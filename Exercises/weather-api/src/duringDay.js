import React from "react";

export default function DuringDay(props) {
  console.log(props);
  return (
    <div className="small">
      <p>{props.time}</p>
      <img src={props.smallImg} alt={props.smallAlt}></img>
      <p>{props.temp}&#8451;</p>
    </div>
  );
}
