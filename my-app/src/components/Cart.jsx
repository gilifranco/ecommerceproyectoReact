import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {

const {cart}=useCart()
 console.log('Agregado al carrito', cart)
  return (
    <div>Cart</div>
  )
}

export default Cart