import { useState } from 'react'
import reactLogo from './assets/react.svg'
import phases from './componentes/phases.json'
import './index.css'

const colors = ['#845EC2','#2C73D2','#0081CF','#0089BA','#008E9B','#008F7A','#FF9671','#FFC75F','#F9F871']
function App({array}) {
  
  const randonPhase = Math.floor(Math.random() * phases.length);
  const [phase, setPhase] = useState(randonPhase);

 

  const randomColor = Math.floor(Math.random() * colors.length);
  const [color, setColor] = useState(randomColor);

  const randonColor = ()=>{
    const randomColor = Math.floor(Math.random() * colors.length);
    setPhase(randomColor)
  }
  
 document.body.style = `background : ${colors[randomColor]}`

  const randomPhase = ()=>{
    const randonPhase = Math.floor(Math.random() * phases.length);
    setPhase(randonPhase)
  }


  return (
    
      <div className='container'>
        <div className='bloque-phase'>
          <div className='quotation'>
            <i class='fa-solid fa-quote-left'></i>
          </div>
          <p>{phases[phase].quote}
          </p>
         </div>
         <div className='bloque-author'>
          <p>{phases[phase].author}</p>
          <button className='btn btn-letf' onClick={randomPhase}><i class='fa-solid fa-angle-right'></i></button>
          </div>
      </div>
    
  )
}

export default App
