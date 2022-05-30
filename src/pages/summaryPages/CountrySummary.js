import React from 'react'
import LineChart from '../../components/visualization/LineChart'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import Input from '../../components/Input'

export default function CountrySummary() {


  const { forcastArray, city } = useSelector((state) => state.weather)

  return (
    <div>
      <Input/>
      <h4> {city}</h4>
      <h5>10 Days of forcast</h5>
      <div style={{margin: '3%', display: 'flex', flexWrap: 'wrap' }}>
        {
         forcastArray ? forcastArray.map((day) => 
            (<div key = {day.date}><Card date={day.date} maxtempC={day.maxtempC} mintempC={day.mintempC}/></div>)) : 'Loading'
        }
      </div>
      <h4> Weather Graph</h4>
      <LineChart width={400} height={400}/>
    </div>
  )
}


