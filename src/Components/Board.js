import React from 'react';
import Card from './Card'
import './Board.css'

const Board = ({ endgame, disabled, cards, flipped, solved, handleClick }) => {

  return (
    <div id="brd" className="board">
      {
        cards.map(card => 
          <Card 
          key={card.id}
          id={card.id}  
          type={card.type}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
          endgame={endgame}
          />
        )
      }
    </div> 
  )
}

export default Board; 