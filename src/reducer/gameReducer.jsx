import {ACTIONS} from './../constant/ACTION'

import rock from './../images/icon-rock.svg';
import paper from './../images/icon-paper.svg';
import scissors from './../images/icon-scissors.svg';

// Define initial state
export const firstState = {
  score: {
    wins: 0,
    losses: 0,
    draws: 0,
  },
  gameAssets: {
    rock: rock,
    paper: paper,
    scissors: scissors,
  },
  gameAction: {
    playerChoice: '',
    coChoice: '',
  },
};

export const init = () =>{
      const savedState = localStorage.getItem(('gameState'))
      return savedState ? JSON.parse(savedState) : firstState
} 


// Game manager logic
export const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.WIN:
      return {
        ...state,
        score: {
          ...state.score,
          wins: state.score.wins + 1,
        },
      };
    case ACTIONS.LOSE:
      return {
        ...state,
        score: {
          ...state.score,
          losses: state.score.losses + 1,
        },
      };
    case ACTIONS.DRAW:
      return {
        ...state,
        score: {
          ...state.score,
          draws: state.score.draws + 1,
        },
      };
    case ACTIONS.SET_PLAYER_CHOICE:
      return {
        ...state,
        gameAction: {
          ...state.gameAction,
          playerChoice: action.payload,
        },
      };
    case ACTIONS.SET_CO_CHOICE:
      return {
        ...state,
        gameAction: {
          ...state.gameAction,
          coChoice: action.payload,
        },
      };
    case ACTIONS.RESET:
      return firstState;
    default:
      return state;
  }
};
