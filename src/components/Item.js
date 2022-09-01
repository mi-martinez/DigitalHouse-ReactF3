import React from 'react'

export default function Item( { item, total, setTotal }) {

  const data = item;

  const handleClick = () => {
      setTotal({
        stock: data.stock --,
        quantity: total.quantity + 1 
      })
  }

  
  return (
    <div className='producto'>
        <h3>{data.producto.nombre}</h3>
        <p>{data.producto.descripcion}</p>
        <h5>En Stock: {data.stock > 0 ? data.stock : <span>agotado</span>} </h5>
        <button onClick={handleClick} disabled={data.stock > 0 ? false : true}>{data.stock > 0 ? 'COMPRAR' : 'SIN STOCK'}</button>

    </div>
  )
}
