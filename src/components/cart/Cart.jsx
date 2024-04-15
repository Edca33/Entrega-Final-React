import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartView from '../cartView/CartView'

const Cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div>
      {cart.length > 0? <CartView/> : <div><h1>No hay item en tu carrito</h1> <Link className='btn btn-success' to= '/'>Ir a Comprar</Link> </div> }
    </div>
  )
}

export default Cart