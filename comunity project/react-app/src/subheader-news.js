import React from "react";
import h678 from "./img/678.jpg";

export default function SubHeaderNews(props) {
  console.log(props);
  return (
    <div className="cont">
            <img src={h678} className="lop" alt="" style={{width:'100%',filter: 'brightness(80%)'}}/>
            <div className="centered tyre" style={{top: '150px'}}>
              <p style={{color: 'green'}}>How to Help </p>
                <h1 style={{fontSize: '40px'}}>Volunteer and Attend <br/>Events</h1>
            </div>
        </div>
  );
}
