import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ productDetail }) => {
  const [purchase, setPuerchase] = useState(false)
  const {addItem, itemQuantity} = useContext(CartContext)
  

  const onAdd = (cantidad) => {

    addItem(productDetail, cantidad)
    setPuerchase(true)
  }
const stockInCart = itemQuantity(productDetail.id)

  return (
    <div>
      <h3>Detalle de : {productDetail.name}</h3>
      <img src={productDetail.img} alt={productDetail.name} />
      <p>{productDetail.description}</p>
      <p>${productDetail.price}</p>
      {purchase
        ? <Link className='btn btn-success' to='/cart'>Ir al carrito</Link>
        : <ItemCount stock={productDetail.stock - stockInCart} onAdd={onAdd} />}
    </div>
  )
}

export default ItemDetail