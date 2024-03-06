import React from 'react'
import { useState } from 'react'
import './Lotary.css'
import { genTicket, sum } from './Helper'


const Lotary = () => {
  const [ticket, setTicket] = useState(genTicket(3))
  let isWinning = sum(ticket) === 15;

  let buyTicket = () => {
    setTicket(genTicket(3))
  }
  return (
    <div>
      <h1>Lotery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br /><br />
      <button onClick={buyTicket}>Buy new ticket </button>
      <h3>{isWinning && "Congratulations, you won"}</h3>
    </div>
  )
}

export default Lotary
