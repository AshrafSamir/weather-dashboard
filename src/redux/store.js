
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../components/weatherSlice'

export default  configureStore({
    reducer: {
        weather: weatherReducer
    },
  });