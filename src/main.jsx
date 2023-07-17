import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './componentes/Header/Header.jsx'
import { Hojauno } from './componentes/Hoja1/Hojauno'
import { Hojados } from './componentes/Hoja2/Hojados'
import { Hojatres } from './componentes/Hoja3/Hojatres'
import { Hojacuatro } from './componentes/Hoja4/Hojacuatro'
import { Hojacinco } from './componentes/Hoja5/Hojacinco'
import { Contacto } from './componentes/Contacto/Contacto'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
      <Header/>
      <Hojauno/>  
      <Hojados/>
      <Hojatres/>
      <Hojacuatro/>
      <Hojacinco/>
      <Contacto/>
      
   
     
     
    
      
    </ChakraProvider>
    
  </React.StrictMode>,
)
