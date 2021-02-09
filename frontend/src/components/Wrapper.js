import React from 'react'

import { useSelector } from 'react-redux'
import { Game } from './Game'
import { CreateUsername } from './CreateUsername'

export const Wrapper = () => {
  const username = useSelector(state => state.rooms.username)

  return (
    <div className="wrapper">
      {/* If the username hasn't been set, show "CreateUsername" component */}
      {
        username === "" &&
        <CreateUsername />
      }
      {
        // If username has been set, go to "Game".
        username !== "" &&
        <Game />
      }
    </div>
  )
} 