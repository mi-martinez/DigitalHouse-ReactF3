import React from 'react'
import { useState } from 'react'
import Item from './Item'

import './data.json'


export default function Listado({total, setTotal}) {

  const data = require('./data.json')

  return (
    <div className='container'>
      {data.map(item => (
        <Item key={item.id} item={item} total={total} setTotal={setTotal} />
      ))}
      
    </div>
  )
}
