import React from 'react'

import { useSelector } from 'react-redux'
import { GameContainer } from './GameContainer'
import { CreateUsername } from './CreateUsername'
import { GameControls } from './GameControls'

export const PageWrapper = () => {
  const username = useSelector(state => state.games.username)

  return (
    <div className="game-container">
      {/* If the username hasn't been set, show "CreateUsername" component */}
      {
        username === "" &&
        <CreateUsername />
      }
      {
        // If username has been set, go to "Game".
        username !== "" &&
        <div>
        <GameContainer />
        <GameControls />
        </div>
      }
    </div>
  )
} 