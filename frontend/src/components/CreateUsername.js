import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { games } from 'reducers/games'

export const CreateUsername = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState ("")

    const dispatchUsername = () => {
      dispatch(
        games.actions.setUsername(username)
      )
    }

    return (
      <div className="box-username">
            <input 
              type="text" 
              placeholder="What's your name?"
              value={username} 
              onChange={event => setUsername(event.target.value)}
            />
            <button type="button" 
              disabled={username.length < 1} 
              onClick={() => dispatchUsername()}
            >
              Confirm
            </button>
        </div>
    )
}