import React, { useEffect, useState } from 'react'
import ButtonCell from './ButtonCell'
import "./Board.css"
function Board({ setWhoWon }) {


    const [currentMove, setCurrentMove] = useState([
        { keyCell: 0, Symbol: "" },
        { keyCell: 1, Symbol: "" },
        { keyCell: 2, Symbol: "" },
        { keyCell: 3, Symbol: "" },
        { keyCell: 4, Symbol: "" },
        { keyCell: 5, Symbol: "" },
        { keyCell: 6, Symbol: "" },
        { keyCell: 7, Symbol: "" },
        { keyCell: 8, Symbol: "" },
    ])

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    useEffect(() => {
            winCheck();
    }, [currentMove])


    function winCheck() {


        for (let j = 0; j < 8; j++) {
            if (currentMove[lines[j][0]] && currentMove[lines[j][1]] && currentMove[lines[j][2]]) {
                if (currentMove[lines[j][0]].Symbol === "X" && currentMove[lines[j][1]].Symbol === "X" && currentMove[lines[j][2]].Symbol === "X")
                    setWhoWon(`Player 2 [X] WINS!!`);
                if (currentMove[lines[j][0]].Symbol === "O" && currentMove[lines[j][1]].Symbol === "O" && currentMove[lines[j][2]].Symbol === "O")
                    setWhoWon(`Player 1 [O] WINS!!`)
            }
        }
    }
    function handleIfWin(id, symbol) {
        const newMoves = currentMove.map((arr) => {
            if (arr.keyCell === id) {
                arr.Symbol = symbol;
                return arr
            }
            else
                return arr
        })
        setCurrentMove(newMoves)
    }
    return (
        <div className="mainBoard">
            <ButtonCell id={0} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={1} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={2} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={3} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={4} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={5} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={6} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={7} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
            <ButtonCell id={8} setCurrentMove={setCurrentMove} handleIfWin={handleIfWin} />
        </div>
    )
}

export default Board