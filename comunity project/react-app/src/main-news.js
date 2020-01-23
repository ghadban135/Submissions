import React from "react";
import h951 from "./img/951.jpg";
import h665 from "./img/665.jpg";
import sea from "./img/sea.jpg";
import capo from "./img/capo.jpg";

export default function MainNews(props) {
  console.log(props);
  return (
    <div>
 <div style={{margin:'10px 0 50px 15px'}}><h2 className="mnb">Latest Stories:</h2></div>
    <div className="eve asdfg" style={{backgroundColor: 'rgb(236, 230, 217)'}}>
        <img src={h951} className="okm" alt="" style={{width: '70%',marginRight: '50px'}}/>
        <div className="klm">Clean up a local park and plants trees along highways</div>
    </div>
    <div className="eve pokl">
        <div className="part">
            <img src={h665} alt="" className="imo"/>
            <p className="klm">Sponsor a recycling contest</p>
        </div>
        <div className="part">
            <img src={sea} alt="" className="imo"/>
            <p className="klm">Participate in the cleanup of a public beach</p>
        </div>
        <div className="part">
            <img src={capo} alt="" className="imo"/>
            <p className="klm">Volunteer at a nature camp and teach kids about the environment</p>
        </div>
    </div>


</div>
  );
}
