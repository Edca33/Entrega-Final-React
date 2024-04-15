import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  const [error,] = useState(false)
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)
    const productCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
    getDocs(productCollection)
      .then((res) => {
        const data = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProducts(data)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])
  /*useEffect(()=>{
    console.log('hola desde el useEffect')
    setLoading(true)
    getProducts()
    .then((res)=>{
      if(categoryId){
       let filtrado= res.filter((prod)=> prod.category === categoryId)
       setProducts(filtrado)
      }else{
        setProducts(res)
      }
    })
    .catch((error)=> setError(error))
    .finally(()=> setLoading(false))
  },[categoryId])*/

  /* const addData = () =>{
     const collectionToAdd = collection(db,"productos")
     productos.map((item)=> addDoc(collectionToAdd, item ))
 
   }*/

  if (loading) {
    return <h1>Cargando...</h1>
  }
  //opcional
  if (error) {
    return <h1>Hubo un error intente mas tarde</h1>
  }

  return (
    <div>
      {/*<button onClick={addData}>Unica Vez</button>*/}
      <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer 