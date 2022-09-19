//import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import { db } from '../firebase/firebase'
import { data } from '../components/utils/Data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

     // useEffect(()=>{
        //le decimos nuestra base de datos y en que coleccion esta
       // const coleccionProductos = collection(db, "products")
        //hacer una referencia que me traiga el ID del useParam
        //const referenciaDoc = doc(coleccionProductos, id)
        //traemos un documento
        //getDoc(referenciaDoc)
        //.then((result)=>{
          //setProductDetail({
            //id:result.id,
            //...result.data()
          //})
        //})
        //.catch((error)=> console.log(error))
        //.finally(()=> setLoading(false))
      //},[])
     useEffect(()=>{
         data
         .then((res)=> setProductDetail(res.find((item)=> item.id == id)))
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false))
     },[id])
   
  return (
    <div>
       {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer