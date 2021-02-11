import React from 'react'
import { useSelector } from 'react-redux'

export const GameContainer = () => {
    const game = useSelector(store => store.games.game)

    return (
        <div className="game-wrapper"> 
            <div>{game.directions}</div>
            <div>{game.question}</div>
            <div>{game.hint}</div>
            
            <div className="answer-box">
            <input 
              type="text" 
              placeholder="Answer?"
            //   value={username} 
            //   onChange={event => setAnswer(event.target.value)}
            />

             </div>
        </div>
        

    )
}