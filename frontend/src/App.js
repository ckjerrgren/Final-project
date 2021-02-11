import React from 'react'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { games } from './reducers/games'
import { GameContainer } from './components/GameContainer'
import { GameControls } from './components/GameControls'

const reducer = combineReducers({ games: games.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
   <Provider store={store}>
     <main>
     <GameContainer /> 
     <GameControls /> 
     </main>
   </Provider>
  )
}
