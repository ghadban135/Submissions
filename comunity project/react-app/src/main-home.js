import React from "react";
import city from "./img/Cities_70px.png";
import cityh from "./img/Cities_70px_hover.png";
import climate from "./img/Climate_70px.png";
import climateh from "./img/Climate_70px_hover.png";
import food from "./img/FoodWater_70px.png";
import foodh from "./img/FoodWater_70px_hover.png";
import land from "./img/LandWater_70px.png";
import landh from "./img/LandWater_70px_hover.png";
import climatechange from "./img/climate-change-Nasa.jpg";
import providefood from "./img/provide-food.jpg";
import h222 from "./img/222.jpg";
import h333 from "./img/333.jpg";
import h444 from "./img/444.jpg";
import h555 from "./img/555.jpg";
import h777 from "./img/777.jpg";
import h888 from "./img/888.jpg";
import h999 from "./img/999.jpg";

export default function MainHome(props) {
  console.log(props);
  return (
    <div >   
         <div className="partt">
                <div className="problem textt container">
                    <h3 style={{marginBottom: '20px',fontSize: '35px'}}>Our Problem </h3>

                    <p>
                        An essential problem of the 21st century is environment changing to the worse.
                        Currently the environment is so contaminated that urgent measures need to be taken.
                        There is no part of the earth that does not remain affected by our actions.
                        Our actions are now threatening the health of our planet, the land we live and work on, the water supply,
                        the ozone layer, the animal species as well as the health of our species.
                        <a href="#demo33"  data-toggle="collapse">read more..</a>
                        <div id="demo33" className="collapse">
                        This website take steps in creating mass awareness about being responsible citizens to contribute to our environment.
                        </div>
                    </p>
                </div>
                
                <div className="mission textt container">
                    <h3 style={{marginBottom: '20px',fontSize: '35px'}}>Our  Mission</h3>
                    <p>
                        Our mission is to conserve the lands and waters on which all life depends.
                        Our vision is a world where the diversity of life thrives, and people act 
                        to conserve nature for its own sake and its ability to fulfill our needs and enrich our lives. 
                        Being environmentally friendly simply means having a lifestyle that are better for the environment.
                        <a href="#demo22"  data-toggle="collapse">read more..</a>
                        <div id="demo22" className="collapse">
                        Its all about taking small steps towards mother earth so as to make this planet
                        a better place for our communities and generations to come. A good way would be to start with
                        conserving water, driving less and walking more, consuming less energy, buying recycled products,
                        eating locally grown vegetables, joining environmental groups to combat air pollution,
                        creating less waste, planting more trees and many more.
                        </div>

                    </p>
                </div>
         </div>
         <img src={h777} alt="climate change" style={{width:'100%',height: '300px'}}/>
         <div className="priority textt">
            <div>Our Priorities</div>
            <h2 style={{fontSize: 'xx-large'}}>A World Where People and Nature Thrive</h2>
            <p style={{fontSize: 'large'}}>We work to meet this ambitious goal by focusing on these key areas of conservation. </p>
            <ul className="nav nav-justified">
                <li className="nav-item">
                  <a href="#climate" className="nav-link">
                      <div className="hov">
                          <img src={climate} alt="Tackle Climate Change"/>
                          <img src={climateh} alt="Tackle Climate Change"/>
                          <h5>
                            Tackle Climate Change
                          </h5>
                      </div>
                  </a>
               </li>
               <li className="nav-item">
                <a href="#protect" className="nav-link">
                    <div className="hov">
                        <img src={land} alt="Protect Land & Water"/>
                        <img src={landh} alt="Protect Land & Water"/>
                        <h5>
                            Protect Land & Water
                        </h5>
                    </div>
                </a>
             </li>
             <li className="nav-item">
                <a href="#food" className="nav-link"> 
                    <div className="hov">
                        <img src={food} alt="Provide Food & Water Sustainably"/>
                        <img src={foodh} alt="Provide Food & Water Sustainably"/>
                        <h5>
                            Provide Food & Water Sustainably
                        </h5>
                    </div>
                </a>
             </li>
             <li className="nav-item">
                <a href="#city" className="nav-link">
                    <div className="hov">
                        <img src={city} alt="Build Healthy Cities"/>
                        <img src={cityh} alt="Build Healthy Cities"/>
                        <h5>
                            Build Healthy Cities
                        </h5>
                    </div>
                </a>
             </li>
            </ul>

        </div>
        <div id="climate" className="dist textt">
            <div>
                <img src={climatechange} alt=""  className="side1"/>
            </div>
            <div className="side2">
                <h4>Tackle Climate Change</h4>
                <p>  
                    Climate change isn’t a distant threat—it is happening now.
                    The impacts of climate change include more extreme weather and natural disasters,
                    chronic droughts & economic instability. 
                
                    <a href="#demo1"  data-toggle="collapse">read more..</a>
                    <div id="demo1" className="collapse">
                            We’re focusing on innovative,
                            science-based solutions that match the urgency of this crisis,
                            such as restoring forests and working to ensure a clean energy future.
                            Together with supporters like you, we can halt the catastrophic impacts of climate change.
                    </div>
                </p>
            </div> 
        </div>
        <div className="wall">
        <div className="cont">
            <img src={h222} alt="" style={{width:'100%'}}/>
            <div className="centered">
                <h2> Now Is the Time to Act</h2><span><br/></span>
                <h3> The science is clear: climate change is the most serious threat facing our planet today.
                     Be a part of the solution—join our efforts 
                      and determine your own carbon footprint and commit to lowering your impact.
                </h3>
            </div>
        </div>
        <div id="protect" className="dist textt">
          <div>
            <img src={h999} alt="" className="side1"/>
          </div>
          <div className="side2">
            <h4>Protect Land & Water</h4>
            <p>
                 Globally, only 5% of the natural lands at high risk of development are protected.
                 Demands on land and water continue to increase, so we must do more, faster.
                 <a href="#demo2"  data-toggle="collapse">read more..</a>
                  <div id="demo2" className="collapse">
                    We won’t survive without clean water and land. We also need healthy, diverse oceans for fishing,
                    working & playing. Working with governments, corporations, local partners & you to creating 
                    mass awareness about being responsible citizens to contribute to our environment.
                  </div>
            </p>
          </div>
        </div>
        <div className="cont">
            <img src={h333} alt="" style={{width:'100%'}}/>
            <div className="centered">
                <h2> Every Day Counts </h2><span><br/></span>
                <h3> Each year, 32 million acres of the world’s forests are lost.
                     Together, we can save the landscapes that provide us with so much.
                      Join our efforts to safeguard public lands, and volunteer to keep our lands and waters healthy. 
                </h3>
            </div>
        </div>
        <div id="food" className="dist textt">
           <div>
            <img src={providefood} alt="" className="side1"/>
           </div>
           <div className="side2">
              <h4>Provide Food & Water Sustainably</h4>
              <p>
                  Food demand is expected to increase by more than 50% in just the next 30 years as the world’s
                  population continues to grow—it’s a challenge that can be met.
                  <span>Land and water stewardship can restore health to our food systems.</span>
                  <a href="#demo3"  data-toggle="collapse">read more..</a>
                  <div id="demo3" className="collapse">
                      Food is sustainable when it benefits the environment and maintains soil fertility.
                      We’re fostering innovations in technology, collaborating with communities to use resources
                      more efficiently and promoting policies that enable sustainability.
                      Together, we can secure healthy food and clean water for all people without sacrificing the environment.
                  </div>
                  
              </p>
           </div>
        </div>
        <div className="cont">
            <img src={h444} alt="" style={{width:'100%'}}/>
            <div className="centered">
                <h2>What Can You Do?</h2><span><br/></span>
                <h3>Get our Everyday Sustainability Guide to find simple, meaningful ways you can reduce food waste,
                     conserve water and live a greener life. 
                </h3>
            </div>
        </div>
        <div id="city" className="dist textt">
          <div>
            <img src={h888} alt="" className="side1"/>
          </div>
          <div className="side2">
              <h4>Build Healthy Cities</h4>
              <p>
                  Cities are growing—fast. By 2050, two-thirds of the world’s population will live in urban areas.
                  An increasing urban population means that cities are expanding their footprint at an alarming rate.
                  
                  <a href="#demo4"  data-toggle="collapse">read more..</a>
                  <div id="demo4" className="collapse">
                      It also means fewer people have access to nature’s benefits. Even in cities, we depend on natural
                      habitat for food, clean water, clean air and our physical & mental health. With smart planning,
                      science-based solutions & strong partnerships, we can make the green cities of tomorrow resilient,
                      healthy & equitable.
                  </div> 
              </p>
          </div> 
        </div>
        <div className="cont">
            <img src={h555} alt="" style={{width:'100%'}}/>
            <div className="centered">
                <h2>Take Action for Healthy Cities</h2><span><br/></span>
                <h3>The Nature Conservancy is working around the world to demonstrate what nature can do for
                     cities—and what cities can do for nature.<span>Add your voice: call for natural solutions for
                      healthy cities and volunteer to make a difference today.</span>   
                </h3>
            </div>
        </div>
      </div>
       
        
    </div>
  );
}