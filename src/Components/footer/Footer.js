import React, { Component } from 'react';
import "./footer.css"
class Footer extends Component {
   
    state = {  }
    render() { 
        return (<div className="footer_container">
               <div className="top">
          <h1>Accessories</h1>
        </div>
        <div className="bottom">
            <button className='left_btn'>SHOP NOW</button>
        </div>
        <div className="footer">
          <h4>Tesla © 2022</h4>
          <h4>Privacy & Legal</h4>
          <h4>Vehicle Recalls</h4>
          <h4>Contact</h4>
          <h4>Careers</h4>
          <h4>News</h4>
          <h4>Engage</h4>
          <h4>Locations</h4>
        </div>
        </div> );
    }
}
 
export default Footer;