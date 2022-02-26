import React from 'react'
import ReactDOM from 'react-dom';
import LISTA from './Components/Flowers/images/images'
import {Flowers} from './Components/Flowers/Flowers'

const App = () => {
  return (
    <div>
      <div className="row">
        <p>New</p>
          <Flowers url={LISTA[0].img} nombre={LISTA[0].nombre}/>
          <Flowers url={LISTA[1].img} nombre={LISTA[1].nombre}/>
          <Flowers url={LISTA[2].img} nombre={LISTA[2].nombre}/>
        <Flowers url={LISTA[3].img} nombre={LISTA[3].nombre}/>
      </div>
      <div className="row">
      <p>Relevant</p>
      <Flowers url={LISTA[4].img} nombre={LISTA[4].nombre}/>
        <Flowers url={LISTA[5].img} nombre={LISTA[5].nombre}/>
        <Flowers url={LISTA[6].img} nombre={LISTA[6].nombre}/>
        <Flowers url={LISTA[7].img} nombre={LISTA[7].nombre}/>
        </div>
    </div>
  )
}
export default App;