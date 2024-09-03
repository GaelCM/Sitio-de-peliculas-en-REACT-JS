
import './App.css'
import { useBuscador } from './customHooks/useBuscador'

import pelisCollection from './pelisCollection.json'
import { CollectionMovies } from './components/CollectionMovies'
import { realizarPeticion } from './services/PelisDB'
import { useMemo, useRef, useState } from 'react'

//apikey=ef30a9e4&s



export function App() {

  const {inputValor,cambiarInput,error,cambiarError}=useBuscador()
  
  const [peliculas,actualizarPeliculas]=useState(pelisCollection.Search)
  const busqueda=useRef(inputValor)
  const [orden,cambiarOrden]=useState(false)  

  const enviar=(e)=>{
    e.preventDefault()
    if(inputValor==""){
      cambiarError("Favor de rellenar el campo")
      return
    }
    if(inputValor==busqueda.current){
      return
    }else{
      busqueda.current=inputValor
      realizarPeticion(inputValor).then(res=>actualizarPeliculas(res))
    }
  }

  const cambiarValorInput=(e)=>{
    const input=e.target.value
    cambiarInput(input)
  }


  const pelis=useMemo(()=>{
      if(orden){
        return [...peliculas].sort((a,b)=>a.Title.localeCompare(b.Title))
      }else{
        return peliculas
      }
  },[orden,peliculas])

  const reinicio=()=>{
    cambiarInput("")
    cambiarError("")
    actualizarPeliculas(pelisCollection.Search)
    cambiarOrden(false)
  }

  return (
    <>
      <header>

        <form action="" onSubmit={enviar}>
          <h1 onClick={reinicio}>Gagoflix.net</h1>
          <div className='entrada'>
          <input type="text" placeholder='Avengers, MadMax, Mision Impo..' name='pelicula' onChange={cambiarValorInput}/>
          <button type='submit'>Buscar</button>
          <div className='orden'>
          <label htmlFor="">ordenar alfabeticamente</label><br />
          <input type="checkbox" name="" id="" checked={orden} onChange={()=>{cambiarOrden(!orden)}}/>
          </div>
          </div>
          <p>{error}</p>
        </form>
      </header>

      <main>
        <CollectionMovies pelis={pelis}></CollectionMovies>
      </main>

      <footer>
        <p>Hecho con mucho cariño por Gael Cuevas Mendoza</p>
      </footer>

    
    </>
  )
}
