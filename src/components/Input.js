import React from 'react'

export default function Input() {
  return (
    <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Cities</label>
        <select className="form-select" id="inputGroupSelect01">
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
  )
}
