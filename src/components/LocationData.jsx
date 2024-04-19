import React from 'react'
import "./styles/locationData.css"

const LocationData = ({lugar}) => {
    console.log(lugar)
  return (
    <section className='ubicacion'>
        <h2 className='ubicacion__nombre'>{lugar?.name}</h2>
        <ul className='ubicacion__lista'>
          <li className='ubicacion__item'><span>Tipo: </span><span>{lugar?.type}</span></li>
          <li className='ubicacion__item'><span>Dimencion: </span><span>{lugar?.dimension}</span></li>
          <li className='ubicacion__item'><span>Populacion: </span><span>{lugar?.residents.length}</span></li>
        </ul>
    </section>
  )
}

export default LocationData