import React from 'react'
import logo from './../images/logo.svg'
import './Header.scss'

export default function Header({state}) {


  return (

    <header className='header'>
      <div className="header__logo">
        <img src={logo} alt="rock paper scissors" />
      </div>
      <div className="header__score">
        <p>score</p>
        <h3>{state.score.wins}</h3>
      </div>
    </header>
  )
}

//player : {state.wins} <br/>
//draw : {state.draws}<br/>
//win : {state.losses}<br/>