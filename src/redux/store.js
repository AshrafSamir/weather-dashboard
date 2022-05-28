
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../pages/weatherSlice'

export default  configureStore({
    reducer: {
        weather: weatherReducer
    },
  });