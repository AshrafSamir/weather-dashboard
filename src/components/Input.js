import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherData } from '../redux/slices/weatherSlice'
import { useNavigate, useParams } from 'react-router-dom'

export default function Input() {

  const dispatch = useDispatch() 
  const param = useParams()
  const navigate = useNavigate();

  useEffect(() => {
     if(param.city){
       dispatch(getWeatherData({city: param.city}))
     }
   }, [ dispatch, param.city])

  const handleInput = (e) => {
    navigate(`/${e.target.value}`)
  }
  
  return (
    <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Cities</label>
        <select value={param.city} onChange={handleInput} className="form-select" id="inputGroupSelect01">
            <option defaultValue hidden>{param.city ? `${param.city}`: 'Choose...'}</option>
            <option value="Cairo" >Cairo</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Luxor" >Luxor</option>
        </select>
    </div>
  )
}
