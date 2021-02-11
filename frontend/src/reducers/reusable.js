import { games } from './games'


export const generateNewGame = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/games')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    dispatch(games.actions.generateGame(data))
                    
                })
    }
}

// DONT FORGET TO ADD THE FETCH To HEROKU 
export const generateNewHint = () => {
return (dispatch) => {
    fetch('')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(games.actions.generateHint(data))
                // Where do i put hint? and do i need ID ? 
            })
}
}