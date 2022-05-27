import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from './weatherSlice'
import getCordinates from '../utils/location'

import LineChart from '../utils/lineChart'

export default function SummaryComponent() {


    const dispatch = useDispatch()
    const data = useSelector((state) => state.weather.data)



    const aapl = [{date: "2007-04-23", close: "93.24"},
      {date: "2007-04-24", close: "95.35"},
      {date: "2007-04-25", close: "98.84"},
      {date: "2007-04-26", close: "99.92"},
      {date: "2007-04-29", close: "99.8"}]


    const d3Chart = LineChart(aapl, {
      x: d => d.date,
      y: d => d.close,
      yLabel: "↑ Daily close ($)",
      width: 50,
      height: 250,
      color: "steelblue"
    })

    console.log(d3Chart)

    useEffect(() => {
     getCordinates()
      dispatch(getWeatherData())
    }, [dispatch])

  return (
    <div>
      <img src={d3Chart} alt="logo"/>
    </div>
  )
}
