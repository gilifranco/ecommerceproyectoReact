import React,{useState, useEffect} from 'react'
import ItemList from './ItemList'
import {data} from './utils/Data'
import { useParams } from 'react-router-dom'
//import { collection, getDocs, query, where } from 'firebase/firestore'
//import { db } from '../firebase/firebase'

const ItemListContainer = ({saludo, greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]= useState(false)
  const{categoriaId}= useParams()

// firebase

//useEffect(()=>{
  //setLoading(true)
  //const productos = categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId) ) : collection(db, "products")
  //getDocs(productos)
  //.then((result)=>{
    //const lista = result.docs.map((product)=>{
      //return{
       // id:product.id,
       // ...product.data()
      //}
    //})
    //setProductList(lista)
  //})
  //.catch((error)=>console.log(error))
  //.finally(()=>setLoading(false))
//}, [categoriaId])




 
 useEffect(()=>{
   setLoading(true)
     data
     .then((res)=>{
       if(categoriaId){
         setProductList(res.filter((item)=> item.category === categoriaId))
       }else{
         setProductList(res)
       }
     })
     .catch((error)=> console.log(error))
     .finally(()=> setLoading(false))
   }, [categoriaId])




  console.log(productList)
  return (
    <div style={{padding:'3rem'}}>
        <p>{saludo}</p>
        <p>{greeting}</p>
      {loading ? <p>Cargando...</p>:<ItemList productList={productList}/>}
    </div>
  )
}

export default ItemListContainer