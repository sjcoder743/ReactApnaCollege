import React from 'react'

const Hello = ({ name, textColor }) => {
  return (
    <div>
      <h2 style={{ color: textColor }}>Hello {name}</h2>
    </div>
  )
}

export default Hello
