import React from 'react'
import { useDispatch } from 'react-redux'

// import { games } from '../reducers/games'
import { generateNewGame } from '../reducers/reusable'

export const GameControls = () => {
    const dispatch = useDispatch()

    const onGameGenerate = () => {
        dispatch(generateNewGame())
    }

    const onHintGenerate = () => {
        // Generate hint for the game
    }

    return (
        <div>
            <button onClick={onGameGenerate}>
             NEXT  
            </button>
            <button onClick={onHintGenerate}>
             Hint 
            </button>
        </div>
    )
}

// On click handler generates new directions. 
// How do I make It random? 

// Button should be disabled until correct answer has been added. 
