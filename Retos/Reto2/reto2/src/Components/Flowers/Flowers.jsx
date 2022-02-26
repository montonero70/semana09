import React from 'react'

import './Flowers.css'

export const Flowers = (props) => {
    const {url, nombre}= props;

  return (
    <div className="col-2 card fs-6">
        <img src={url} alt='texto'/>
        <h1>{nombre}</h1>
    </div>
  )
}
