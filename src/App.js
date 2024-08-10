import React, {  useEffect, useState } from 'react'
import Footer from './components/Footer'
import { useGameManager } from './hooks/useGameManager'
import './styles/global.scss'
import GameArea from './components/GameArea'



export default function App() {
  
  const {state,win,lose,draw,reset} = useGameManager()  
  const [currStep,setCurrStep] = useState(1)


  useEffect(()=>{
      console.log(state)
  },[state])


  return (
    <div className='App'>
      <div className='App__wrapper'>
        <GameArea />
      <Footer />
      </div>
    </div>
  )
}
