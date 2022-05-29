import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { getWeatherData, getCountry } from './redux/slices/weatherSlice'
import { useGetCordinates } from './utils/useGetCordinates'

import CountrySummary from './pages/summaryPages/CountrySummary'
import CitySummary from './pages/summaryPages/CitySummary'


function App() {

  const dispatch = useDispatch()
  const crd = useGetCordinates()
  const { country } = useSelector((state)=> state.weather)

  useEffect(() => {
    if(crd){
      dispatch(getCountry(crd))
    }
    if(country){
      dispatch(getWeatherData({city: country}))
    }
    
    
  }, [country, crd, dispatch])

  return (
    <div className="layout">
      <Router>
        <div style={{  margin: '3%', width: '100vw'}}>
          <Routes>
              <Route exact path="/" element={<CountrySummary />} />
              <Route path="/:city" element={<CitySummary />} />
          </Routes>
        </div>
      </Router>
    </div>
    );
}

export default connect()(App);
