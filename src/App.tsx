import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/global.css'
export function App() {

  return (
    // tag vazia que posibilita ter mais de um componente no retorno da função
    <> 
    <h1 className='text-2xl text-zinc-500 font-bold'>Hello World</h1>
    <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300'>enviar</button>
    </>
  )
}

