import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';


const cardImages = [

{'src': "/img/card-1.jpg" ,matched:false},
{'src': "/img/card-2.jpg", matched:false},
{'src': "/img/card-3.jpg" ,matched:false},
{'src': "/img/card-4.jpg" ,matched:false},
{'src': "/img/card-5.jpg", matched:false},
{'src': "/img/card-6.jpg" ,matched:false},
{'src': "/img/card-7.jpg", matched:false},
{'src': "/img/card-8.jpg" ,matched:false},

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

//handles a choice 
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card): setChoiceOne(card)

}

// compare 2 cards
useEffect(() => {
  if(choiceOne && choiceTwo){
    if(choiceOne.src === choiceTwo.src){
      setCards(prevTurns =>{
        return prevTurns.map(card =>{
          if(card.src === choiceOne.src){
            return {...card,matched:true}
          }else{
            return card
          }
        })
      })
      resetTurn()
    }else{
      
      setTimeout(()=> resetTurn(),1000) 
    }
  }
},[choiceOne,choiceTwo])

console.log(cards)

//resets choices & increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns+1)
}

console.log(cards,turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card=>(
          <SingleCard 
          key={card.id} 
          card ={card}
          handleChoice = {handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
        />
        ))}
      </div>

    </div>
  );
}

export default App;
