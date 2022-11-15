import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SingleCard from './components/SingleCard';


const cardImages = [

{'src': "/img/card-1.jpg"},
{'src': "/img/card-2.jpg"},
{'src': "/img/card-3.jpg"},
{'src': "/img/card-4.jpg"},
{'src': "/img/card-5.jpg"},
{'src': "/img/card-6.jpg"},
{'src': "/img/card-7.jpg"},
{'src': "/img/card-8.jpg"},

]



function App() {
  const [cards,setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

// shuffle cards
const shuffleCards = () =>{
  const shuffledCards = [...cardImages,...cardImages]
  .sort(()=> Math.random()-0.5)
  .map((card)=>({...card,id:Math.random() }))

  setCards(shuffledCards)
  setTurns(0)

}

console.log(cards,turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card=>(
          <SingleCard key={card.id} card ={card}/>
        ))}
      </div>

    </div>
  );
}

export default App;
