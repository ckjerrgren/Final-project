import { createSlice } from '@reduxjs/toolkit'



export const games = createSlice({
    name: 'games',
    initialState: {
        game: { 
            directions: 'THIS IS WHERE THE GAME STARTS', 
            question: 'what color i sthe sky?', 
            hint: 'not red', 
            answer: 'blue', }
    },

    reducers: {
        generateGame: (state, action) => {
            state.game = action.payload
        },
        

    }
})

// DUMMY DATA - SWAP FOR YOUR OWN DATABAS WHEN IT STARTS WORKING. 
