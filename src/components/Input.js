import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherData } from '../redux/slices/weatherSlice'
import { useNavigate, useParams } from 'react-router-dom'

export default function Input() {

  const dispatch = useDispatch() 
  const param = useParams()
  const navigate = useNavigate();
  const { cities } = useSelector((state)=> state.weather)

  useEffect(() => {
     if(param.city){
       dispatch(getWeatherData({city: param.city}))
     }
   }, [ dispatch, param.city])

  const handleInput = (e) => {
    navigate(`/${e.target.value}`)
  }

  const handleAccents = (text)=> {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }
  
  return (
    <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Cities</label>
        <select value={param.city} onChange={handleInput} className="form-select" id="inputGroupSelect01">
            <option defaultValue hidden>{param.city ? `${param.city}`: 'Choose...'}</option>
            {
              cities ? cities.map((city)=>
                (<option key={handleAccents(city.name)} value={handleAccents(city.name)} >{handleAccents(city.name)}</option>)
              ) : null
            }
        </select>
    </div>
  )
}
