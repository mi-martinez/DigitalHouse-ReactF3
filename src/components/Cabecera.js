import React from 'react'

export default function Cabecera({total}) {
  
  return (
    <header>
        <h1>Carrito de compras:</h1>
        <p>Cantidad de productos: <span>{total.quantity}</span></p>
    </header>
  )
}
