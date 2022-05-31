import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from '../../components/WeatherCard'
import Input from '../../components/Input'
import HourlyChart from '../../components/visualization/HourlyChart'
import { useNavigate } from 'react-router-dom'


export default function CurrentCondition() {

  const { observation_time, weatherDesc, weatherIconUrl, temp_C, humidity, city, windSpeed, astronomy, status } = useSelector((state) => state.weather)
  const navigate = useNavigate();

  return (
    <div>
      <Input city={city} />
      <div className="card-background__summary">
        <h5>Quick summary for the city</h5>
        <WeatherCard observation_time={observation_time}
          weatherDesc={weatherDesc} weatherIconUrl={weatherIconUrl} temp_C={temp_C}
          humidity={humidity} city={city} windSpeed={windSpeed} astronomy={astronomy} />
      </div>
      <div >
        <HourlyChart />
      </div>
      <button onClick={()=> navigate('/')} type="button" className="btn btn-dark">Home</button>
    </div>
  )
}
