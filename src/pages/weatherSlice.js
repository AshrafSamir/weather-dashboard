import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async () => {
    return fetch('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c922c071a1aa4997ad6224013222605&q=alexandria&num_of_days=7&day=today&tp=3&format=json')
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
    status: null,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getWeatherData.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getWeatherData.fulfilled]: (state, action) => {
      console.log(action.payload.data)
      state.data = Object.assign(action.payload.data)
      state.observation_time = action.payload.data.current_condition[0].observation_time
      state.weatherDesc = action.payload.data.current_condition[0].weatherDesc[0].value
      state.weatherIconUrl = action.payload.data.current_condition[0].weatherIconUrl[0].value
      state.temp_C = action.payload.data.current_condition[0].temp_C
      state.humidity = action.payload.data.current_condition[0].humidity
      state.city = action.payload.data.request[0].query
      state.status = 'success'
    },
    [getWeatherData.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})


export default weatherSlice.reducer