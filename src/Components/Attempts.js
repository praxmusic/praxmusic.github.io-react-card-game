import React from 'react';
import './Attempts.css' 


const Attempts = ({ fails, endgame }) => {   
    if (fails <= 4) {
        return <h1 id='atmpt' className='attempt'>Attempts: {fails}/4</h1>
    } else if (fails > 4 ){
        return <h1 className='attempt-loss'>Loss</h1>
    } else if (endgame && fails < 4) {
        return <h1 className='attempt-win'>Win</h1>
    }
}



export default Attempts;