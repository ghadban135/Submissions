import React from "react";

export default function MainContact(props) {
  console.log(props);
  return (
    <div className="contactt">
      <div className="info">
            <div className="minadd">
              <span style={{fontSize: '25px'}}><i className="material-icons">location_on</i>&nbsp;Address</span>
              <span>Platinum Tower 8th floor Hamra street beirut lebanon</span>
            </div>
            <div className="minadd">
              <span style={{fontSize: '25px'}}><i className="material-icons">call</i>&nbsp;Lets Talk </span>
              <span>+961 71135886</span>
            </div>
            <div className="minadd">
              <span  style={{fontSize: '25px'}}><i className="material-icons">email</i>&nbsp;General Support</span>
              <span>ah.ghadban8@gmail.com</span>
            </div>
      
      
       </div>
       <form style={{flex: '30%',marginRight: '50px'}}>
          <fieldset>
            <legend>Send Us A Message</legend>
            <label>Name<br/>
              <input type="text" size="40" placeholder="Name.."/>
            </label><br/>
            <label>Email<br/>
              <input type="email" size="40" placeholder="Email Address.."/>
            </label><br/>
            <label>Phone<br/>
              <input type="tel"  size="40"  placeholder="Your Phone..."/>
            </label><br/>
            <label style={{width: '100%'}}>Message<br/>
              <textarea placeholder="Question/Comment" style={{width: '100%'}}></textarea>
            </label>
          </fieldset>
          <button type="submit" className="btn btn-primary ropo" style={{minWidth: '244px', borderRadius: '20px'}}>Send</button>
        </form>
     </div>
  );
}
