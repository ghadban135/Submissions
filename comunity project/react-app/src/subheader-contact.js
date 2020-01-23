import React from "react";
import h678 from "./img/678.jpg";

export default function SubHeaderContact(props) {
  console.log(props);
  return (
    <div className="cont">
                    <img src={h678} className="lop" alt="" style={{width:'100%',filter: 'brightness(80%)'}}/>
                    <div className="centered tyre" style={{top: '150px'}}>
                      <p style={{color: 'green'}}>let’s meet today.</p>
                        <h1 style={{fontSize: '40px'}}>Contact us or<br/>
                          <i>schedule a visit</i> to us today.</h1>
                    </div>
                </div>
  );
}
