import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import DuringDay from "./duringDay";
import FakeWeather from "./data/FakeWeather.json";

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
          img={clear}
          alt={FakeWeather.list[29].weather[0].description}
          desWeather={FakeWeather.list[29].weather[0].description}
          avgMin={FakeWeather.list[29].main.temp_min}
          avgMax={FakeWeather.list[29].main.temp_max}
          Humidity={FakeWeather.list[29].main.humidity}
          Pressure={FakeWeather.list[29].main.pressure}
        ></CurrentWeather>

        <div className="footer">
          <div className="small"></div>
          <DuringDay
            time={FakeWeather.list[29].dt_txt}
            smallImg={clear}
            smallAlt={FakeWeather.list[29].weather[0].description}
            temp={FakeWeather.list[29].main.temp}
          ></DuringDay>
          <DuringDay
            time={FakeWeather.list[30].dt_txt}
            smallImg={clear}
            smallAlt={FakeWeather.list[30].weather[0].description}
            temp={FakeWeather.list[30].main.temp}
          ></DuringDay>
          <DuringDay
            time={FakeWeather.list[31].dt_txt}
            smallImg={clear}
            smallAlt={FakeWeather.list[31].weather[0].description}
            temp={FakeWeather.list[31].main.temp}
          ></DuringDay>
          <DuringDay
            time={FakeWeather.list[32].dt_txt}
            smallImg={clear}
            smallAlt={FakeWeather.list[32].weather[0].description}
            temp={FakeWeather.list[32].main.temp}
          ></DuringDay>
          <DuringDay
            time={FakeWeather.list[33].dt_txt}
            smallImg={clear}
            smallAlt={FakeWeather.list[33].weather[0].description}
            temp={FakeWeather.list[33].main.temp}
          ></DuringDay>
          <DuringDay
            time={FakeWeather.list[34].dt_txt}
            smallImg={mostlycloudy}
            smallAlt={FakeWeather.list[34].weather[0].description}
            temp={FakeWeather.list[34].main.temp}
          ></DuringDay>
          <DuringDay
            time={FakeWeather.list[35].dt_txt}
            smallImg={mostlycloudy}
            smallAlt={FakeWeather.list[35].weather[0].description}
            temp={FakeWeather.list[35].main.temp}
          ></DuringDay>
          <div className="small"></div>
        </div>
      </div>
    );
  }
}

export default App;
