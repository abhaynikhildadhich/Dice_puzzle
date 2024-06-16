import React, { useState } from 'react'
import styled from 'styled-components'


function RoleDice(props) {
    
      
    const DiceContainer= styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    .dice{
        cursor:pointer;
    }
    img{
        width:200px;
        border-radius:20px;
    }
`
  return (
    <DiceContainer>
    <div className='dice'
    onClick={props.Rdice}>
            <p style={{color:"red"}}>{props.Error}</p>
        <img src={`./src/media/dice/${props.Mdice}.png`} alt="one" />

    </div>
    <p>Click On Dice To Roll</p>
      
    </DiceContainer>
  )
}

export default RoleDice
