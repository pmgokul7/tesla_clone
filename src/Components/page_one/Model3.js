import React from 'react'
import "./model3.css"
function Model3(props) {
  
  return (
    <div className='model3_container' style={{backgroundImage:`url(${props.background})`}}>
        <div className="top">
          <h1>{props.title}</h1>
          <h3>{props.subtitle ? props.subtitle:<h3>Order Online for <span>Touchless Delivery</span></h3>}</h3>
        </div>
        <div className="bottom">
            <button className='left_btn'>{props.b1}</button>
            <button className='right_btn'>{props.b2}</button>
        </div>



        

    </div>
  )
}

export default Model3