import React from 'react'

const Service = (props) => {
  return (
    <div className="card flash service-box col-lg-4">
      <div className='flash-card'>
        <img src={props.image} className="card-image" alt="Customer img" />
        <h3 className="service-heading">{props.title}</h3>
        <div>{props.desc}</div>
        <a href={props.link}>
        <button type="button" className="btn btn-outline-success btn-lg download-button">{props.btn}</button>
        </a>
      </div>
    </div>
  )
}

export default Service