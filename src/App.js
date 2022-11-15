import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


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
          <div className="card" key={card.id}>
            <div>
              <img className='front' src={card.src} alt="card front" width="300" height="300" />
              <img className='back' src="/img/cover_img2.jpg" alt="card back" width="300" height="300"/>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
