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

const Habi = () => {
    return(
        <>
        <div>

<div class="ia">
<div class="cuno"> <p class="texto" >HTML</p> <img className='imagenuno'  src={htm} alt="" /> </div>
<div class="cdos"> <p class="texto">CSS</p><img className='imagendos' src={css} alt="" /></div>
<div class="ctres"> <p class="texto">JAVASCRIPT</p> <img className='imagentres' src={js} alt="" /></div>
<div class="ccuatro"> <p class="texto">PYTHON</p><img className='imagencuatro' src={py} alt="" /></div>
</div>
<div class="io">
<div class="ccinco"> <img className='imagencinco' src={rea} alt="" /> <p class="textodos">REACT</p></div>
<div class="cseis"> <img className='imagenseis' src={ia} alt="" /> <p class="textodos">IA</p></div>
<div class="csiete"> <img className='imagensiete' src={ado} alt="" /> <p class="textodos">ILUSTRATOR</p></div>
<div class="cocho"> <img className='imagenocho' src={node} alt="" /> <p class="textodos node">NODE JS</p></div>
</div>
</div>
        
        </>
    )
}

export { Habi }