import React from 'react'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { games } from './reducers/games'
// import { GameContainer } from './components/GameContainer'
// import { GameControls } from './components/GameControls'
import { CreateUsername } from './components/CreateUsername'
import { PageWrapper } from './components/PageWrapper'

const reducer = combineReducers({ games: games.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
   <Provider store={store}>
     <main>
       <CreateUsername /> 
       <PageWrapper />
     </main>
   </Provider>
  )
}
