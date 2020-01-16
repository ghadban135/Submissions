import React from "react";

export default function Search(props) {
  console.log(props);
  return (
    <form className="header" onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="Type in a city name"
        className="inputcity"
        value={props.city}
      ></input>
      <button className="ButtonFindWeathe" >FindWeather</button>
    </form>
  );
}
