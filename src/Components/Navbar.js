import React from 'react';
import './Navbar.css';
import shuffle from './Deck'

function Navbar({ setEndGame, cards, setCards, fails, setFails, setFlipped, setDisabled, setSolved }){
    
    //function to reset the game
    const NewGame = () => {
        setFlipped([])
        setSolved([])
        setDisabled(false)
        setFails(fails = 0)
        setCards(shuffle(cards))
        setEndGame(false)
        document.getElementById('brd').className = 'board'
        document.getElementById('nav').style.background = 'black';
    }

    return (
        <div id="nav" className="nav">
            <div className="nav-containerS">
            <header className="title">Match The Cards</header>
            <button className="newgame" onClick={NewGame}>New Game</button>
            </div>

                {/* possible added features */}

            {/* <div className="dropdown">
                <button className="dropbtn">Difficulty 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <option onClick={easyGame} value="easy">Easy</option>
                <option onClick={normalGame} value="normal">Normal</option>
                <option onClick={hardGame} value="hard">Hard</option>
                </div>
            </div> */}
        </div>

    )
};


export default Navbar;

