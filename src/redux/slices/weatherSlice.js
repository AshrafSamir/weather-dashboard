import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async (obj) => {
    return fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c922c071a1aa4997ad6224013222605&q=${obj.city}&num_of_days=10&day=today&tp=3&format=json`)
    .then((res) => 
        res.json()
    )
})


 export const getCountryCode = createAsyncThunk('weather/getCountryCode', async () => {
  return fetch(`http://ipinfo.io/json?token=5ceedde54deca8`)
  .then((res) => 
      res.json()
   )
})

const initialState = {
    data: {},
    observation_time: null,
    weatherDesc: null,
    weatherIconUrl: null,
    temp_C: null,
    humidity: null,
    city: null,
    forcastArray: [],
    chartData: [],
    windSpeed: null,
    country: null,
    hourlyData: [],
    astronomy: {},
    countryCode: null,
    cities: [],
    status: null,

}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCountry: (state, action)=> {
      state.country =  action.payload
    },
    setCountryCities: (state, action)=> {
      state.cities =  action.payload
    }
  },
  extraReducers: {
    [getWeatherData.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getWeatherData.fulfilled]: (state, action) => {

      state.data = Object.assign(action.payload.data)
      state.observation_time = action.payload.data.current_condition[0].observation_time
      state.weatherDesc = action.payload.data.current_condition[0].weatherDesc[0].value
      state.weatherIconUrl = action.payload.data.current_condition[0].weatherIconUrl[0].value
      state.temp_C = action.payload.data.current_condition[0].temp_C
      state.humidity = action.payload.data.current_condition[0].humidity
      state.city = action.payload.data.request[0].query
      state.forcastArray = action.payload.data.weather
      state.chartData = action.payload.data.ClimateAverages[0].month
      state.windSpeed = action.payload.data.current_condition[0].windspeedKmph
      state.hourlyData = action.payload.data.weather[0].hourly
      state.astronomy = Object.assign(action.payload.data.weather[0].astronomy[0])
      state.status = 'success'
    },
    [getWeatherData.rejected]: (state, action) => {
      state.status = 'failed'
    },



    [getCountryCode.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCountryCode.fulfilled]: (state, action) => {
      state.countryCode = action.payload.country
      state.status = 'success'
    },
    [getCountryCode.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export const { setCountry, setCountryCities } = weatherSlice.actions

export default weatherSlice.reducer