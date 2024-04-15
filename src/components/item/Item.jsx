import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({prod}) => {

  return (
    <div className='card' style={{width:'20rem'}}>
        <img src={prod.img} alt={prod.name} className='card-img-top'/>
        <div className='card-body'>
            <p className='card-text'>{prod.name}</p>
        </div>
        <Link className='btn btn-primary' to={`/item/${prod.id}`}>Ver más</Link>
    </div>
  )
}

export default Item