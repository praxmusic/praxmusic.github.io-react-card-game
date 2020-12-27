import React from 'react';
import './Card.css'

const Card = ({ endgame, disabled, handleClick, id, type, flipped, solved }) => {
  return(
    <div 
    style={{display: endgame ? "none" : "block"}}
    className={ `${flipped || solved ? type : 'card'}` }
    onClick={() => disabled ? null : handleClick(id)} >
    </div>

  )
}


export default Card;