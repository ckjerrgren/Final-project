import React from 'react'
import { useSelector } from 'react-redux'

export const GameContainer = () => {
    const game = useSelector(store => store.games.game)
    console.log(game)

    return (
        <div>MY GAME {game.directions} </div>
    )
}