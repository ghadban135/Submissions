import React from "react";

export default function CurrentWeather(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="imge">
        <img src={props.img} alt={props.alt}></img>
      </div>
      <div>
        <p className="first">{props.desWeather}</p>
      </div>
      <div>
        <p>
          <strong>
            Temperature {props.avgMin}&#176; to {props.avgMax}&#8451;
          </strong>
        </p>
      </div>
      <div>
        <p>
          <strong>Humidity &nbsp;</strong> {props.Humidity}%
          <strong>&nbsp;&nbsp;Pressure&nbsp;</strong> {props.Pressure}
        </p>
      </div>
    </div>
  );
}
