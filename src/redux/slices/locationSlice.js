import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


 export const getCountryCode = createAsyncThunk('location/getCountryCode', async () => {
  return fetch(`https://ipinfo.io/json?token=5ceedde54deca8`)
  .then((res) => 
      res.json()
   )
})

const initialState = {

    country: null,
    countryCode: null,
    city: null,
    cities: [],
    locationStatus: null,

}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCountry: (state, action)=> {
        state.country =  action.payload
    },
    setCity: (state, action)=> {
        state.city =  action.payload
      },
    setCountryCities: (state, action)=> {
        state.cities =  action.payload
    }
  },
  extraReducers: {

    [getCountryCode.pending]: (state, action) => {
      state.locationStatus = 'loading'
    },
    [getCountryCode.fulfilled]: (state, action) => {
      state.countryCode = action.payload.country
      state.locationStatus = 'success'
    },
    [getCountryCode.rejected]: (state, action) => {
      state.locationStatus = 'failed'
    },
  },
})

export const { setCountry, setCity,  setCountryCities } = locationSlice.actions

export default locationSlice.reducer