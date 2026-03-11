import React, { useEffect, useState } from 'react'
import '../App.css'
import Template from '../Templete.jsx'
import ShowProduct from './ShowProduct.jsx'
import Cart from './cartcomponents.jsx'

function Product() {

  const [result, setResult] = useState(null)

  function fetchProduct() {
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(json=>{
        setResult(json)
        console.log(json)
      })
  }
  

  //if(!result)
  //fetchProduct();


  useEffect(()=>{
    fetchProduct();
  }, [])
  
   

  if(!result)
  return (
    <div className="main-content common">
      <Template />
    </div>
  )
  else
  return (
    <div className="main-content common">
      <ShowProduct result={result} />
    </div>
  )
}

export default Product
