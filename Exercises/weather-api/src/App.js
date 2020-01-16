import React, { Component } from "react";
import "./App.css";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import storm from "./img/weather-icons/storm.svg";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import DuringDay from "./duringDay";
import FakeWeather from "./data/FakeWeather.json";


function getImg(id) {
  let val = "";
  if (id < 300) val = storm;
  else if (id >= 300 && id < 500) val = drizzle;
  else if (id >= 500 && id < 599) val = rain;
  else if (id >= 600 && id < 699) val = snow;
  else if (id >= 700 && id < 799) val = fog;
  else if (id === 800) val = clear;
  else if (id === 801) val = partlyCloudy;
  else if (id === 802) val = cloudy;
  else if (id > 801 && id < 806) val = mostlyCloudy;
  return val;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:undefined,
      temp:undefined,
      city: undefined,
      Humidity:undefined,
      Pressure:undefined,
      desWeather:undefined,
      error:undefined
      
    };
  }
  
 
 getWeather = async (e) =>{
   e.preventDefault();
   const city =e.target.elements.city.value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=177068d067d414c6ac4c134a7da328d6`);
    const data = await response.json();
    console.log(data);

   if (data.cod=== '200'){
    this.setState({
     
      desWeather:data.list[0].weather[0].description,
      alt:       data.list[0].weather[0].description,
      avgMin:    data.list[0].main.temp_min,
      avgMax:    data.list[0].main.temp_max,
      Humidity:  data.list[0].main.humidity,
      Pressure:  data.list[0].main.pressure,
      temp1:Math.round(data.list[0].main.temp),
      temp2:Math.round(data.list[1].main.temp),
      temp3:Math.round(data.list[2].main.temp),
      temp4:Math.round(data.list[3].main.temp),
      temp5:Math.round(data.list[4].main.temp),
      temp6:Math.round(data.list[5].main.temp),
      temp7:Math.round(data.list[6].main.temp),
      time1:(data.list[0].dt_txt).slice(11,16),
      time2:(data.list[1].dt_txt).slice(11,16),
      time3:(data.list[2].dt_txt).slice(11,16),
      time4:(data.list[3].dt_txt).slice(11,16),
      time5:(data.list[4].dt_txt).slice(11,16),
      time6:(data.list[5].dt_txt).slice(11,16),
      time7:(data.list[6].dt_txt).slice(11,16),
      img1:getImg(data.list[0].weather[0].id),
      img2:getImg(data.list[1].weather[0].id),
      img3:getImg(data.list[2].weather[0].id),
      img4:getImg(data.list[3].weather[0].id),
      img5:getImg(data.list[4].weather[0].id),
      img6:getImg(data.list[5].weather[0].id),
      img7:getImg(data.list[6].weather[0].id),
      
      error:""  
    }); 
   }
   else
   {
    alert("city not found");
   }
  }


  render() {
    return (
      <div className="app">
        <Search getWeather={this.getWeather}></Search>

        <CurrentWeather
          img={this.state.img1}
          alt={this.state.desWeather}
          desWeather={this.state.desWeather}
          avgMin={this.state.avgMin}
          avgMax={this.state.avgMax}
          Humidity={this.state.Humidity}
          Pressure={this.state.Pressure}
        ></CurrentWeather>

        <div className="footer">
          <div className="small"></div>
          <DuringDay
            time={this.state.time1}
            smallImg={this.state.img1}
            temp={this.state.temp1}
          ></DuringDay>
          <DuringDay
            time={this.state.time2}
            smallImg={this.state.img2}
            temp={this.state.temp2}
          ></DuringDay>
          <DuringDay
            time={this.state.time3}
            smallImg={this.state.img3}
            temp={this.state.temp3}
          ></DuringDay>
          <DuringDay
            time={this.state.time4}
            smallImg={this.state.img4}
            temp={this.state.temp4}
          ></DuringDay>
          <DuringDay
            time={this.state.time5}
            smallImg={this.state.img5}
            temp={this.state.temp5}
          ></DuringDay>
          <DuringDay
            time={this.state.time6}
            smallImg={this.state.img6}
            temp={this.state.temp6}
          ></DuringDay>
          <DuringDay
            time={this.state.time7}
            smallImg={this.state.img7}
            temp={this.state.temp7}
          ></DuringDay>
          <div className="small"></div>
        </div>
      </div>
    );
  }
}

export default App;
