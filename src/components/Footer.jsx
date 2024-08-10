import React, { useState } from 'react'
import './Footer.scss'
import Rules from './Rules'

export default function Footer() {

  const [isHidden,setIsHidden] = useState(true)


  return (
    <footer className='footer'>
        <button onClick={()=>setIsHidden(false)}>rules</button>
        <Rules isHidden={isHidden} setIsHidden={setIsHidden} />
    </footer>
  )
}
