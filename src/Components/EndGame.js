
import './Board.css'
import './Navbar.css'
import './Attempts'


const EndGame = (result) => {
    
    if (result === 'win'){
        document.getElementById('brd').className = 'winboard';
        document.getElementById('nav').style.background = 'rgb(128 197 228)';
    } else if (result === 'lose'){
        document.getElementById('brd').className = 'loseboard';
        document.getElementById('nav').style.background = 'rgb(173 16 16)';
    }
}

export default EndGame; 