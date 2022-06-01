
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './slices/weatherSlice'
import locationReducer from './slices/locationSlice'

export default  configureStore({
    reducer: {
        weather: weatherReducer,
        location: locationReducer
    },
  });