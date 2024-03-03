import React from 'react'
import "./Product.css"
const ProductTab = ({ title, Price, features }) => {
  // const list = features.map((features)=> <li>{features}</li>)
  return (
    <>
      <div className="container">
        <h3><i>Title: {title}</i></h3>
        <p>Price: &#8377;{Price}</p>
        {/* <p>{features.map((features)=> <li>{features}</li>)}</p> */}
      </div>
    </>
  )
}

export default ProductTab
