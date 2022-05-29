
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './slices/weatherSlice'

export default  configureStore({
    reducer: {
        weather: weatherReducer
    },
  });