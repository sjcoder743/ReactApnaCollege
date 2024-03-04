import React from 'react'

const Price = ({ oldPrice, newPrice }) => {
  let oldStyle = {
    textDecorationLine: "line-through",
  }

  let newStyle = {
    fontWeight: "bold",
  }

  let styles = {
    height: "50px",
    backgroundColor: "#e0c367",
  }
  return (
    <div>
      <span style={oldStyle}>{oldPrice}</span> &nbsp; &nbsp; &nbsp; &nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  )
}

export default Price
