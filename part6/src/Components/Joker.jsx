import { useState ,useEffect} from 'react'
const Joker = () => {
  const url = "https://official-joke-api.appspot.com/jokes/random"
  const [joke, setJoke] = useState({})

  const getJoke = async () => {
    let responce = await fetch(url)
    let jsonRes = await responce.json()
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });

  }
  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();   
  }, []);
  



  return (
    <div>
      <h1>Joker</h1>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getJoke}>New joke</button>
    </div>
  )
}

export default Joker
