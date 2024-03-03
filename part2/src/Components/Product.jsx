import React from 'react'
import ProductTab from './ProductTab'
const Product = () => {
  let options = ["hi-tech","durable","fast"]
  return (
    <>
     <ProductTab title={"Phone"} Price= "20k" features={options}/> 
     <ProductTab title={"Laptop"} Price= {30000} features={options}/> 
     <ProductTab title={"Pen"} Price= {10} features={options}/> 
    </>
  )
}

export default Product
