import React from 'react'
import { useSelector } from 'react-redux'
import WeatherCard from '../../components/WeatherCard'
import Input from '../../components/Input'


export default function CurrentCondition() {

  const {observation_time, weatherDesc, weatherIconUrl, temp_C, humidity, city, windSpeed} = useSelector((state) => state.weather)
  return (
    <div>
        <Input/>
        <WeatherCard observation_time={observation_time} weatherDesc={weatherDesc} weatherIconUrl={weatherIconUrl} temp_C={temp_C} humidity={humidity} city={city} windSpeed={windSpeed} />
    </div>
  )
}
