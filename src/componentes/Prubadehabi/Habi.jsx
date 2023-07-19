import React from 'react';
import './Habi.css'
import htm from '/icons8-html.svg'
import css from '/icons8-css.svg'
import js from '/icons8-js.svg'
import py from '/icons8-python.svg'
import rea from '/icons8-reaccionar-nativo.svg'
import ia from '/icons8-inteligencia-artificial-50.png'
import ado from '/icons8-adobe-illustrator.svg'
import node from '/icons8-node-js.svg'
import { Box } from '@chakra-ui/react';

const Habi = () => {
    return(
        <>
        <div>
<Box display="flex" marginBottom="2em" flexWrap="wrap" w={{base:'20em', md:'29em', lg:'29em',xl:'29em', '2xl':'29em',}}justifyContent="center" alignItems="center"  marginLeft={{base:'2.5em', md:'0', lg:'0',xl:'0', '2xl':'0',}}>
    
<div class="cuno"> <p class="texto" >HTML</p> <img className='imagenuno'  src={htm} alt="" /> </div>
<div class="cdos"> <p class="texto">CSS</p><img className='imagendos' src={css} alt="" /></div>
<div class="ctres"> <p class="texto">JAVASCRIPT</p> <img className='imagentres' src={js} alt="" /></div>
<div class="ccuatro"> <p class="texto">PYTHON</p><img className='imagencuatro' src={py} alt="" /></div>
</Box>
<Box display="flex"  flexWrap="wrap" w={{base:'20em', md:'29em', lg:'29em',xl:'29em', '2xl':'29em',}}justifyContent="center" alignItems="center"  marginLeft={{base:'2.5em', md:'0', lg:'0',xl:'0', '2xl':'0',}}>
<div class="ccinco"> <img className='imagencinco' src={rea} alt="" /> <p class="textodos">REACT</p></div>
<div class="cseis"> <img className='imagenseis' src={ia} alt="" /> <p class="textodos">IA</p></div>
<div class="csiete"> <img className='imagensiete' src={ado} alt="" /> <p class="textodos">ILUSTRATOR</p></div>
<div class="cocho"> <img className='imagenocho' src={node} alt="" /> <p class="textodos node">NODE JS</p></div>
</Box>
</div>
        
        </>
    )
}

export { Habi }