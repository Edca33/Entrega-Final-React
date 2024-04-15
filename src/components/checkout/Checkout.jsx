import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '../../service/firebase'
const Checkout = () => {
    const {cart, clear, cartTotal}= useContext(CartContext)
    const [ordenId, setOrdenId] = useState('')
    const [loading, setLoading] = useState(false)
const {
    register,
    handleSubmit,
    formState:{errors},
    getValues
}= useForm()

const handleOrder =(data)=>{
  setLoading(true)
    let orden = {
        user:{
            nombre: data.nombre,
            correo: data.email
        },
        items: cart,
        total: cartTotal(),
        date: serverTimestamp()
    }
    const ventas = collection(db, "orders")
    addDoc(ventas, orden)
    .then((res)=>{
        setOrdenId(res.id)
        clear()
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}

if(loading){
    return <p>Cargando...</p>
}
  return (
    <div>
      { ordenId ? <p> Generaste con éxito tu solicitud, su numero de seguimiento es:{ordenId}</p> :<div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit(handleOrder)}>
                <label>Nombre</label>
                <input className='form-control' type='text' name='nombre' {...register("nombre",{required:true, minLength:2})}/>
                {errors?.nombre?.type === 'required' && <p>Nombre es requerido</p>}
                {errors?.nombre?.type === 'minLength' && <p>El nombre debe superar los 2 caracteres</p> }
                <label>Email</label>
                <input className='form-control' type='email' name='email' {...register("email", {minLength:8, required:true})}/>
                {errors?.email?.type === 'required' && <p>El mail es requerido</p>}
                {errors?.email?.type === 'minLength' && <p>El mail es demasiado corto</p> }
                <label>Confirmar Email</label>
                <input className='form-control' type='email' name='email2' {...register("email2", {minLength:8, required:true, validate:{equalsMails: mails2 => mails2 === getValues().email}})}/>
                {errors?.email2?.type === 'required' && <p>El mail es requerido</p>}
                {errors?.email2?.type === 'minLength' && <p>El mail es demasiado corto</p> }
                {errors?.email2?.type ==='equalsMails' && <p>Los mails deben ser iguales</p>}
                <button className='btn btn-success'>Confirmar compra</button>
            </form>
        </div>}
    </div>
  )
}

export default Checkout