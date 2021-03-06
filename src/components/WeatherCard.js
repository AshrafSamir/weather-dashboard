import React from 'react'
import Table from './visualization/Table'

export default function WeatherCard(props) {

  const {observation_time, weatherDesc, weatherIconUrl, temp_C, humidity, city, windSpeed, astronomy} = props

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <div className="card" style={{maxWidth: "10rem", margin: '2%' ,flexGrow: '1' }}>
          <img src={weatherIconUrl} className="card-img-top" alt="..."></img>
          <div className="card-body" >
              <div style={{textAlignLast: 'center'}}>
                  <h5 className="card-title">{weatherDesc}</h5>
                  <h6 className="card-title">{temp_C}&deg;C </h6>
                  <h6 className="card-title">{observation_time}</h6>
                  <h6 className="card-title">{city ? city.split(',')[0]:'Loading'} </h6>
              </div>
          </div>
      </div>
      <div className='card' style={{margin: '2%'}}>
        <Table astronomy={astronomy}/>
      </div>
      <div style={{flex: '7', margin: '2%'}}>
        <div>
          <div style={{display: 'flex'}}>
            <h5 style={{display: 'inline',flex: '7'}}>Humidity:</h5>
            <h5 style={{display: 'inline', flex: '1'}}>{humidity}%</h5>
          </div>

          <div className="progress" >
            <div className="progress-bar" role="progressbar" style={{width: `${humidity}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{humidity}%</div>
          </div>
        </div>
        <div style={{marginTop: '5%'}}>
          <div style={{display: 'flex'}}>
              <h5 style={{display: 'inline',flex: '7'}}>Wind Speed:</h5>
              <h5 style={{display: 'inline', flex: '1'}}>{windSpeed}kmp/h</h5>
            </div>

            <div className="progress" >
              <div className="progress-bar" role="progressbar" style={{width: `${windSpeed}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{windSpeed} kmp/h</div>
            </div>
        </div>

      </div>
      
    </div>

  )
}

