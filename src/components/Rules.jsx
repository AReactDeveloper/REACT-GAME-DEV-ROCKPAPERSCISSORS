import React, { useState } from 'react'
import rulesImg from "./../images/image-rules.svg"
import closeIcon from "./../images/icon-close.svg"

export default function Rules({isHidden,setIsHidden}) {

    return (
        <div className={isHidden ? 'rules hide' : 'rules'}>
            <h1>RULES</h1>
            <img src={rulesImg} alt="" />
            <button onClick={()=>setIsHidden(true)}>
                <img src={closeIcon} alt="" />
            </button>
        </div>
    )
}
