import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <input
            type="text"
            placeholder="Type in a city name"
            className="inputcity"
          ></input>
          <button className="ButtonFindWeathe"> FindWeather</button>
        </div>
        <div className="main">
          <div className="imge">
            <img src={mostlycloudy} alt="mostlycloudy"></img>
          </div>
          <div>
            <p className="first">overcast clouds</p>
          </div>
          <div>
            <p>
              <strong>Temperature 10&#176; to 11&#8451;</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Humidity &nbsp;</strong> 78%{" "}
              <strong>&nbsp;&nbsp;Pressure&nbsp;</strong> 1008.48
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="small"></div>
          <div className="small">
            <p>03:00</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>8&#8451;</p>
          </div>
          <div className="small">
            <p>06:00</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>9&#8451;</p>
          </div>
          <div className="small">
            <p>09:00</p>
            <img src={clear} alt="clear"></img>
            <p>14&#8451;</p>
          </div>
          <div className="small">
            <p>12:00</p>
            <img src={clear} alt="clear"></img>
            <p>17&#8451;</p>
          </div>
          <div className="small">
            <p>15:00</p>
            <img src={clear} alt="clear"></img>
            <p>18&#8451;</p>
          </div>
          <div className="small">
            <p>18:00</p>
            <img src={clear} alt="clear"></img>
            <p>16&#8451;</p>
          </div>
          <div className="small">
            <p>21:00</p>
            <img src={mostlycloudy} alt="mostlycloudy"></img>
            <p>13&#8451;</p>
          </div>
          <div className="small"></div>
        </div>
      </div>
    );
  }
}

export default App;
