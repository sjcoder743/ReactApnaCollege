import React from 'react'
import { useState } from 'react'
import { genTicket, sum } from './Helper'
import Ticket from '../SecondMethod/Ticket'


const Lotary = ({ n, winCondition }) => {
  const [ticket, setTicket] = useState(genTicket(n))
  let isWinning = winCondition(ticket)

  let buyTicket = () => {
    setTicket(genTicket(n))
  }
  return (
    <div>
      <h1>Lotery Game</h1>
      <Ticket ticket={ticket} />

      <button onClick={buyTicket}>Buy new ticket </button>
      <h3>{isWinning && "Congratulations, you won"}</h3>
    </div>
  )
}

export default Lotary
