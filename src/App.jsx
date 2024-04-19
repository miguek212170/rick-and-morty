import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import LocationData from './components/LocationData';
import HuespedCard from './components/HuespedCard';

function App() {

  const [inputValue, setInputValue] = useState(Math.floor(Math.random() * 126) + 1)
  const [lugar, obtenerLugar, estaCargando, tieneError] = useFetch();

  useEffect(() => {
    //const numRandom = 
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    obtenerLugar(url);
  }, [inputValue])

  //console.log(lugar);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = "";
  }

  return (
    <>
      {
        estaCargando ?
          <h2>Cargando...</h2>
          :
          <div className='app'>
            <h1>RICK AND MORTY</h1>
            <form className='app__formulario' onSubmit={handleSubmit}>
              <input className='app__input' type="text" ref={textInput} />
              <button className='app__boton' >Buscar</button>
            </form>
            {
              tieneError || inputValue === "0"?
                <h2>Hey, tu deberias ingresar un numero desde 1 a 126</h2>
                :
                <div>
                  <LocationData
                    lugar={lugar}
                  />
                  <div className='app__container'>
                    {
                      lugar?.residents.map(residente =>(
                        <HuespedCard
                          key = {residente}
                          url = {residente}
                        />
                      ))
                    }
                  </div>
                </div>

            }

          </div>
      }


    </>
  )
}

export default App
