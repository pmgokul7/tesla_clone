import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import "./modely.css"
import "aos/dist/aos.css"
function Modely() {
  
  
  return (
    <div className='modely_container'>


<div className="top" >
          <h1  >Model Y</h1>
          <h3>Order  Online for <span>Touchless Delivery</span></h3>
        </div>
        <div className="bottom">
            <button className='left_btn'>CUSTOM ORDER</button>
            <button className='right_btn'>EXISTING INVENTORY</button>
        </div>


    </div>
  )
}

export default Modely