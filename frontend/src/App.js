import React from 'react'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'



export const App = () => {
  return (
   <Provider store={store}>
     <Wrapper />
   </Provider>
  )
}
