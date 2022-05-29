import React from 'react'

export default function Card(props) {

  const { date, maxtempC, mintempC } = props
  return (
    <div className="card border-secondary mb-3" style={{maxWidth: '18rem', margin: '2%'}}>
        <div className="card-header">{date}</div>
            <div className="card-body text-secondary">
                <h5 className="card-title">Temperature</h5>
                <p className="card-text">Maximum Temperature: {maxtempC}<strong>&deg;C</strong>  Minimum Temperature: {mintempC}<strong>&deg;C</strong></p>
            </div>
    </div>
  )
}
