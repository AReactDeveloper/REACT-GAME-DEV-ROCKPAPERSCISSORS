import React from 'react'
import './../Step.scss'

export default function Step1({rock,paper,scissors,setPlayerChoice}) {
  return (
    <section className='step1'>
        <button onClick={()=>setPlayerChoice('rock')} className='btn btn-rock'><img src={rock} alt="rock" /></button>
        <button onClick={()=>setPlayerChoice('paper')} className='btn btn-paper'><img src={paper} alt="rock" /></button>
        <button onClick={()=>setPlayerChoice('scissors')} className='btn btn-scissors'><img src={scissors} alt="rock" /></button>
    </section>
  )
}
