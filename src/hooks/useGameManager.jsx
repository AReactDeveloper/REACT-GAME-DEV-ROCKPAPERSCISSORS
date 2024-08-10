import React, { useEffect, useReducer } from 'react'
import { firstState, gameReducer, init } from '../reducer/gameReducer'
import {ACTIONS} from './../constant/ACTION'


export const useGameManager = () => {
  
    const [state,dispatch] = useReducer(gameReducer,firstState,init)

    //save to localstorage
    useEffect(()=>{
        localStorage.setItem('gameState',JSON.stringify(state))
    },[state])

    const win = () => dispatch({type:ACTIONS.WIN})
    const lose = () => dispatch({type:ACTIONS.LOSE})
    const draw = () => dispatch({type:ACTIONS.DRAW})
    const reset = () => dispatch({type:ACTIONS.RESET})

    const setPlayerChoice = (choice) => dispatch({type: ACTIONS.SET_PLAYER_CHOICE, payload: choice});

    const setCoChoice = (choice) => dispatch({type: ACTIONS.SET_CO_CHOICE, payload: choice});
    
    return {
        state,win,lose,draw,reset,
        setPlayerChoice: setPlayerChoice ,
        setCoChoice : setCoChoice
    }
}
