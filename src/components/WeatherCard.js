import React from 'react'
import { useSelector } from 'react-redux'

export default function WeatherCard() {

  return (
    <div className="card" style={{maxWidth: "7rem", margin: '2%'}}>
        <img src="http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" className="card-img-top" alt="..."></img>
        <div className="card-body" >
            <div style={{textAlignLast: 'center'}}>
                <h5 className="card-title">Sunny</h5>
                <h6 className="card-title">38*C </h6>
                <h6 className="card-title">Mon 12/22</h6>
                <h6 className="card-title">17 Km/s </h6>
            </div>
        </div>
    </div>
  )
}

