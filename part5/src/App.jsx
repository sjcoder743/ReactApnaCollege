import Lotary from './Component/Lotary'
import './App.css'
import TicketNum from './SecondMethod/Ticket'
import { sum } from './Component/Helper'

function App() {
  let winCondition = (ticket) => {
    // return sum(ticket) === 10
    // return ticket.every((num)=> num === ticket[0])
    return ticket[0] === 5
  }
  return (
    <>
      <Lotary n={3} winCondition={winCondition} />
      {/* <TicketNum ticket={[0, 1, 2]} />
      <TicketNum ticket={[0, 1, 2, 4, 6, 8]} /> */}
    </>
  )
}

export default App
