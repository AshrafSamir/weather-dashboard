import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async () => {
    return fetch('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=c922c071a1aa4997ad6224013222605&q=cairo&num_of_days=2&day=today&tp=3&format=json')
    .then((res) => 
        res.json()
    )
})

const initialState = {
    data: {},
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
      state.data = Object.assign(action.payload.data)
      state.status = 'success'
    },
    [getWeatherData.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})


export default weatherSlice.reducer