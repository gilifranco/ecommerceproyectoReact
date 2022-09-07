import React from 'react'
import Counter from './Counter'


const ItemDetail = ({productDetail}) => {
    const {name, description, price, stock, img}= productDetail|| {}

    const onAdd = () => {
        console.log('Agregaste al Carrito')
    }
    
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2>Detalle de: {name}</h2>
        <img src={img} alt={name} style={{width:'25rem'}}/>
        <p>{description}</p>
        <p>${price}</p>
        <Counter stock={stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail