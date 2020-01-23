import React from "react";
import h999 from "./img/999.jpg";
import health from "./img/health-city.jpg";
import providefood from "./img/provide-food.jpg";

export default function MainCarousel(props) {
  console.log(props);
  return (
    <div id="emo" className="carousel slide" data-ride="carousel">
    <ul className="carousel-indicators">
      <li data-target="#emo" data-slide-to="0" className="active"></li>
      <li data-target="#emo" data-slide-to="1"></li>
      <li data-target="#emo" data-slide-to="2"></li>
    </ul>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={h999} alt="Protect Land & Water" width="100%" height="500"/>
        <div className="carousel-caption">
          <h3>Protect Land & Water</h3>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={providefood}  alt="Provide Food" width="100%" height="500"/>
        <div className="carousel-caption">
          <h3>Provide Food and Water Sustainably</h3>
        </div>   
      </div>
      <div className="carousel-item">
        <img src={health} className="asd" alt="Healthy Cities" width="100%" height="500"/>
        <div className="carousel-caption">
          <h3>Build Healthy Cities</h3>
        </div>   
      </div>
    </div>
    <a className="carousel-control-prev" href="#emo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#emo" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
  </div>
  );
}