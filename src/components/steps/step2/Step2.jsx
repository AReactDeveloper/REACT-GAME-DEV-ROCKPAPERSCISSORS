import React, { useDeferredValue, useEffect, useState } from 'react'
import './../Step.scss'


export default function Step2({playerChoice , coChoice,playerChoiceIcon,coChoiceIcon,resetGame,gameOverMsg}) {

  const [isGameOver,setIsGameOver] = useState(false)
  const [isLoaded,setIsLoaded] = useState(false)

  useEffect(()=>{
      setTimeout(() => {
        setIsLoaded(true)
        setIsGameOver(true)
      }, 1000);
  },[])

  const placeHolder = <div className='loader'></div>

  const gameOverDiv = (
    <>
    <h1>{gameOverMsg}</h1>
    <button onClick={resetGame} className='pa-button'>Play again</button>
    </>
  )

  return (
    <>
    <section className='step2'>
        <div className="playerChoice">
          <button className={`btn btn-${playerChoice}`}><img src={playerChoiceIcon} alt="" /></button>
          <h3>You Picked <br /> {playerChoice} </h3>
        </div>
        <div className='gameOver'>
        {isGameOver ? gameOverDiv : null}
        </div>
        <div className="computerChoice">
        {!isLoaded ? placeHolder : <button className={`btn btn-${coChoice}`}><img src={coChoiceIcon} alt="" /></button>}
          <h3>The House picked {coChoice}</h3>
        </div>
    </section>
    
    </>
  )
}
