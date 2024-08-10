import React, { useEffect, useState } from 'react'
import Step1 from './steps/step1/Step1'
import Step2 from './steps/step2/Step2'
import { useGameManager } from '../hooks/useGameManager'
import Header from './Header'



export default  function GameArea() {
  const {draw,win,lose,state,setPlayerChoice,setCoChoice} = useGameManager()
  const [gameOverMsg , setGameOverMsg] = useState('')
  const [currStep,setCurrStep] = useState(1)
  
  useEffect(()=>{
      const updateChoices = async ()=>{
        if(state.gameAction.playerChoice !== ''){
          setCurrStep(2)
          const choices = ['rock','paper','scissors']
          await new Promise(resolve => setTimeout(resolve, 1000)); // delay just for things to look good
          const randomIndex = Math.floor(Math.random() * choices.length)
          const randomChoice = choices[randomIndex]
          setCoChoice(randomChoice)
          
          //conditions
          //draw
          if(state.gameAction.playerChoice == randomChoice){
            setGameOverMsg('ITS A DRAW')
            draw()
          }
          //player wins
          if (
            (state.gameAction.playerChoice === 'rock' && randomChoice === 'scissors') ||
            (state.gameAction.playerChoice === 'scissors' && randomChoice === 'paper') ||
            (state.gameAction.playerChoice === 'paper' && randomChoice === 'rock')
          ) {
              setGameOverMsg('YOU WIN')
              win()
          }
          //player loses
          if(
            (randomChoice === 'rock' && state.gameAction.playerChoice === 'scissors') ||
            (randomChoice === 'scissors' && state.gameAction.playerChoice === 'paper') ||
            (randomChoice === 'paper' && state.gameAction.playerChoice === 'rock')
          ){
              setGameOverMsg('YOU LOSE')
              lose()
          }
      }
    }
      updateChoices()
  },[state.gameAction.playerChoice])

  //watch computer chocie
  useEffect(()=>console.log(state),[state.gameAction.coChoice])
 

  //reset game
  const resetGame = ()=>{
    setCurrStep(1)
    setPlayerChoice('')
    setCoChoice('')
  }
  //hard reset game

  const renderStep = ()=>{
    switch(currStep){
      case 1 : 
        return <Step1
            rock={state.gameAssets.rock}
            paper={state.gameAssets.paper}
            scissors={state.gameAssets.scissors}
            setPlayerChoice={setPlayerChoice}
        />;
      case 2 : 
        return <Step2 
        playerChoice={state.gameAction.playerChoice} 
        coChoice={state.gameAction.coChoice}
        playerChoiceIcon = {state.gameAssets[state.gameAction.playerChoice]}
        coChoiceIcon={state.gameAssets[state.gameAction.coChoice]}
        resetGame={resetGame}
        gameOverMsg={gameOverMsg}
        />;
      default :
          return <h1>not found</h1>
      }
  }

  return (
    <>
    <Header state={state} />
    {renderStep()}
    </>
  )
}
