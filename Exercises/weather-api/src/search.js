import React from "react";

export default function Search(props) {
  console.log(props);
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Type in a city name"
        className="inputcity"
        value={props.city}
      ></input>
      <button className="ButtonFindWeathe">FindWeather</button>
    </div>
  );
}
