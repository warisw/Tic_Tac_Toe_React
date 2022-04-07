import React, { useState } from 'react'
import { UserContext } from "../App"
import "./ButtonCell.css"
function ButtonCell({id,setCurrentMove,handleIfWin}) {

  const [textIn, setTextIn] = useState("")
  const [isDisabled, setDisabled] = useState(false)


  return (
    <UserContext.Consumer>
      {
        ({ turn, setTurn }) => {
          return <button disabled={isDisabled} onClick={() => {


            if (turn % 2 === 0) {
              setTextIn("O");
           
              setTurn(turn + 1);
              
              setDisabled(true);

              handleIfWin(id,"O");
            }
            else {
              setTextIn("X")
              setTurn(turn + 1)
              setDisabled(true)

              handleIfWin(id,"X");
            }

          }} className='buttonCell'>{textIn}</button>
        }
      }

    </UserContext.Consumer>
  )
}

export default ButtonCell