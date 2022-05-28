import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherData } from './weatherSlice'
import { getCordinates } from '../utils/location'
import CountrySummary from './summaryPages/CountrySummary'




export default function SummaryComponent() {


    const dispatch = useDispatch()

    useEffect(() => {
     getCordinates()
      dispatch(getWeatherData())
    }, [dispatch])

  return (
    <div className="home-screen">
      <CountrySummary/>
    </div>
  )
}
