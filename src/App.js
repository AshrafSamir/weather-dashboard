import './App.css';
import React, { useEffect, useRef  } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { getWeatherData } from './redux/slices/weatherSlice'
import { getCountryCode, setCountry, setCountryCities } from './redux/slices/locationSlice'
import LoadingBar from 'react-top-loading-bar'

import CountrySummary from './pages/summaryPages/CountrySummary'
import CitySummary from './pages/summaryPages/CitySummary'

import { Country, City } from 'country-state-city';


function App() {

  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.weather)
  const { country, city, countryCode, locationStatus } = useSelector((state) => state.location)
  const ref = useRef(null)

  useEffect(() => {

    if((status === "loading") || (locationStatus === "loading"))ref.current.continuousStart()
    else if((status === "success") || (locationStatus === "success"))ref.current.complete()

    if(countryCode === null){
      dispatch(getCountryCode())
    }

    if (countryCode) {

      const { name } = Country.getCountryByCode(countryCode)
      dispatch(setCountry(name))

      const cities = City.getCitiesOfCountry(countryCode);
      dispatch(setCountryCities(cities))
    }

    if (country && (city === null)) {
      dispatch(getWeatherData({ city: country }))
    }

  }, [city, country, countryCode, dispatch])

  return (
    <div className="bg layout">
      <Router>
        <LoadingBar color='#f11946' ref={ref} />
        <div style={{ margin: '3%', width: '100vw' }}>
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
