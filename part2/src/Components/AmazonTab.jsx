import React from 'react'
import AmazonCard from './AmazonCard'
let styles = {
  sdisplay: "flex",
  flexWrap: "wrap",
}

const AmazonTab = () => {
  return (
    <div style={styles}>
      <AmazonCard title="Logitech MX Masyer" idx={0} />
      <AmazonCard title="Apple Pencil (2nd Gen)" idx={1} />
      <AmazonCard title="Zebronics Zeb-transformer" idx={2} />
      <AmazonCard title="Petronics Tiad 23" idx={3} />

    </div>
  )
}

export default AmazonTab
