import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from '../../components/WeatherCard'
import Input from '../../components/Input'
import HourlyChart from '../../components/visualization/HourlyChart'
import { useNavigate } from 'react-router-dom'


export default function CurrentCondition() {

  const { observation_time, weatherDesc, weatherIconUrl, temp_C, humidity, windSpeed, astronomy } = useSelector((state) => state.weather)
  const { city }= useSelector((state) => state.location)
  
  const navigate = useNavigate();

  return (
    <div>

      <div style={{ marginBottom: '1%'}}>
        <svg onClick={()=> navigate('/')} type="button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </div>

      <Input city={city} />

      <div className="card-background__summary">
        <h5>Quick summary for the city</h5>
        <WeatherCard observation_time={observation_time}
          weatherDesc={weatherDesc} weatherIconUrl={weatherIconUrl} temp_C={temp_C}
          humidity={humidity} city={city} windSpeed={windSpeed} astronomy={astronomy} />
      </div>

      <div className="card-background__summary">
        <HourlyChart />
      </div>

    </div>
  )
}
