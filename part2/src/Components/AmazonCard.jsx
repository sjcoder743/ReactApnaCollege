import React from 'react'
import Price from './Price'
const AmazonCard = ({ title, idx }) => {
  let oldPrice = ["12,256", "11,990", "10,353", "7,99"]
  let newPrice = ["9,256", "6,700", "2,393", "5,99"]

  let description = [
    ["8,000 SPI", "S Programable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ]
  return (
    <div className='container'>

      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  )
}

export default AmazonCard
