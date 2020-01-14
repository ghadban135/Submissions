import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import DuringDay from "./duringDay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Search></Search>

        <CurrentWeather
          img={mostlycloudy}
          alt="mostlycloudy"
          desWeather="overcast clouds"
          avgMin="10"
          avgMax="11"
          Humidity="78"
          Pressure="1008.48"
        ></CurrentWeather>

        <div className="footer">
          <div className="small"></div>
          <DuringDay
            time="03:00"
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp="8"
          ></DuringDay>
          <DuringDay
            time="06:00"
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp="9"
          ></DuringDay>
          <DuringDay
            time="09:00"
            smallImg={clear}
            smallAlt="clear"
            temp="14"
          ></DuringDay>
          <DuringDay
            time="12:00"
            smallImg={clear}
            smallAlt="clear"
            temp="17"
          ></DuringDay>
          <DuringDay
            time="15:00"
            smallImg={clear}
            smallAlt="clear"
            temp="18"
          ></DuringDay>
          <DuringDay
            time="18:00"
            smallImg={clear}
            smallAlt="clear"
            temp="16"
          ></DuringDay>
          <DuringDay
            time="21:00"
            smallImg={mostlycloudy}
            smallAlt="mostlycloudy"
            temp="13"
          ></DuringDay>
          <div className="small"></div>
        </div>
      </div>
    );
  }
}

export default App;
