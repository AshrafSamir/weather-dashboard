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
      <div className="card-background__summary">
        <h4> {city}</h4>
        <h5>10 Days of forcast</h5>
        <div className="card-layout__summary">
          {
          forcastArray ? forcastArray.map((day) => 
              (<div key = {day.date}><Card date={day.date} maxtempC={day.maxtempC} mintempC={day.mintempC}/></div>)) : 'Loading'
          }
        </div>
      </div>
      <h4> Weather Graph</h4>
      <div className="card-background__summary">
        <LineChart/>
      </div>
      
    </div>
  )
}


