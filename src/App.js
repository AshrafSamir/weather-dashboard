import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { getWeatherData, getCountryCode, setCountry, setCountryCities } from './redux/slices/weatherSlice'

import CountrySummary from './pages/summaryPages/CountrySummary'
import CitySummary from './pages/summaryPages/CitySummary'

import { Country, City }  from 'country-state-city';


function App() {

  const dispatch = useDispatch()
  const { country, city, countryCode, status } = useSelector((state)=> state.weather)

  useEffect(() => {
    
    dispatch(getCountryCode())

    if(countryCode){

      const { name } = Country.getCountryByCode(countryCode)
      dispatch(setCountry(name))
    
      const cities = City.getCitiesOfCountry(countryCode);
      dispatch(setCountryCities(cities))
    }

    if(country && (city === null)){
      dispatch(getWeatherData({city: country}))
    }
    
  }, [city, country, countryCode, dispatch])

  return (
    <div className="layout">
      {status === "failed" ? alert("Failed to retrive location"): 
      (  <Router>
        <div style={{  margin: '3%', width: '100vw'}}>
          <Routes>
              <Route exact path="/" element={<CountrySummary />} />
              <Route path="/:city" element={<CitySummary />} />
          </Routes>
        </div>
      </Router>)}
    </div>
    );
}

export default connect()(App);
