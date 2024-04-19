import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import "./styles/huespedCard.css"

const HuespedCard = ({ url }) => {
    //console.log(url)
    const [residente, obtenerResidente] = useFetch();
    useEffect(() => {


        return () => {
            obtenerResidente(url)
        }
    }, [])
    console.log(residente)
    return (
        <article className='residente'>
            <figure className='residente__img'>
                <img src={residente?.image} alt="Foto Residente" />
                <figcaption className='residente__status'>
                    <div className={`residente__circulo ${residente?.status}`}></div>
                    <span>{residente?.status}</span>
                </figcaption>
            </figure>
            <h3 className='residente__nombre'>{residente?.name}</h3>
            <hr className='residente__linea' />
            <ul className='residente__lista'>
                <li className='residente__item'><span>Especie: </span><span>{residente?.species}</span></li>
                <li className='residente__item'><span>Origen: </span><span>{residente?.origin.name}</span></li>
                <li className='residente__item'><span>Apariciones: </span><span>{residente?.episode.length}</span></li>
            </ul>
        </article>
    )
}

export default HuespedCard