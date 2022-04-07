
import { useState,createContext } from 'react';
import './App.css';
import Board from './components/Board';
export const UserContext = createContext()
function App() {
  const [turn, setTurn] = useState(0);
  const [whoWon, setWhoWon] = useState("");

  return (

    <div className="App">
      <div className={whoWon && 'wins'}>{whoWon}</div>
      <div className='turns'>{turn%2===0 && "Player 1 " || "Player 2"} is playing</div>
      <UserContext.Provider value={{turn,setTurn}}>
        <Board setWhoWon={setWhoWon}/>
      </UserContext.Provider>
      <button  onClick={()=>{window.location.reload(false)}} className='newGameButton'>New game</button>
    </div>
  );
}

export default App;
