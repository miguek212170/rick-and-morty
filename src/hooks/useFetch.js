import  axios  from 'axios';
import React, { useState } from 'react'

const useFetch = () => {
    const [apiData, setApiData] = useState();
    const [estaCargando, setEstaCargando] = useState(true);
    const [tieneError, setTieneError] = useState(false)
    const obtenerApi = (url) =>{
        axios.get(url)
            .then(respuesta => {
                setTieneError(false)
                setApiData(respuesta.data)
            })
            .catch(falla => {
                setTieneError(true)
                console.log(falla)
            })
            .finally(()=>{
                setEstaCargando(false)
            })
    }
    return [apiData, obtenerApi, estaCargando, tieneError];
}

export default useFetch