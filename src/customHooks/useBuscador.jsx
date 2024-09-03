
import {useState,useEffect, useRef} from 'react'

export function useBuscador(){

    const [inputValor,cambiarInput]=useState('')
    const [error,cambiarError]=useState("")

    const bandera=useRef(true)
  
    useEffect(()=>{

      if(bandera.current){
        cambiarError(null)
        bandera.current=false
        return
      }
  
      if(inputValor==''){
        cambiarError("No puedes poner algo vacio")
        return
      }
  
      if(inputValor.length < 3){
        cambiarError("No puedes poner 2 palabras")
        return
      }
      cambiarError(null)
  
    },[inputValor])
  
    return {inputValor,cambiarInput,error,cambiarError}
  }