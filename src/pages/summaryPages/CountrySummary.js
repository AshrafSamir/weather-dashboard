import React from 'react'
import Input from '../../components/Input'
import WeatherCard from '../../components/WeatherCard'
import LineChart from '../../components/visualization/LineChart'

export default function CountrySummary() {


 

  return (
    <div style={{margin: '3%' }}>
      <Input/>
      <h4> Cairo, Egypt</h4>
      <div style={{margin: '3%', display: 'flex', flexWrap: 'wrap' }}>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
      </div>
      <h4> Weather Graph</h4>
      <LineChart width={400} height={400}/>
    </div>
  )
}


