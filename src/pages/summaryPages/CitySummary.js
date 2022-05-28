import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default function CurrentCondition() {

  const {observation_time, weatherDesc, weatherIconUrl, temp_C, humidity, city} = useSelector((state) => state.weather)

  return (
    <div>
        <span className="border border-2 rounded">{weatherDesc}</span>
        <span className="border border-2 rounded"><img src={weatherIconUrl} alt="weatherIconUrl"></img></span>
        <span className="border border-2 rounded">{observation_time}</span>
        <span className="border border-2 rounded">{temp_C}</span>
        <span className="border border-2 rounded">{humidity}</span>
        <span className="border border-2 rounded">{city}</span>
    </div>
  )
}
