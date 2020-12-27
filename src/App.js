import React, { useState, useEffect } from 'react'
import './App.css'

//Components
import Board from './Components/Board'
import Navbar from './Components/Navbar'
import Attempts from './Components/Attempts'
import initializeDeck from './Components/Deck.js'
import EndGame from './Components/EndGame'


const App = () => {

  //state
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [fails, setFails] = useState(0);
  const [endgame, setEndGame] = useState(false)

  

//useeffects
useEffect(() => {
  setCards(initializeDeck())
}, [])


// this Effect checks on fails and solved to check for a win or lose
useEffect(() => {
  if (fails > 4) { 
    EndGame('lose');
    setEndGame(true)
  } else if (solved.length > 1 && solved.length === cards.length) {
    EndGame('win');
    setEndGame(true)
  }
}, [fails, solved.length, cards.length]);





//functions
  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        setFlipped([])
        resetCards()
      } else {
        setTimeout(resetCards, 600)
        setFails(fails + 1);
      }
    } 
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type 
  }


  return (
    <div>
      <Navbar 
      cards={cards}
      setCards={setCards}
      fails={fails}
      setFails={setFails}
      setFlipped={setFlipped}
      setDisabled={setDisabled}
      setSolved={setSolved}
      setEndGame={setEndGame}
      />
      <Attempts 
      fails={fails}
      setFails={setFails}
      endgame={endgame}
      />
      <Board 
      cards={cards}
      flipped={flipped}
      setFlipped={setFlipped}
      handleClick={handleClick}
      disabled={disabled}
      solved={solved}
      endgame={endgame}
      setEndGame={setEndGame}
      />
    </div>
  )
}


export default App; 