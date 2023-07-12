import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './componentes/Header/Header.jsx'
import { Hojauno } from './componentes/Hoja1/Hojauno'
import { Titulo } from './componentes/Titulo/Titulo'
import { Hojados } from './componentes/Hoja2/Hojados'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
  
      <Header/>
      <Hojauno/>
      <Hojados/>
      
      
    </ChakraProvider>
    
  </React.StrictMode>,
)
