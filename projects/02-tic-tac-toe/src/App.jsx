import { useState } from "react"
import conffeti from 'canvas-confetti'

import { Square } from "./components/Square";

import { TURNS } from "./constants";
import { checkWinnerFrom } from "./logic/board";


function App(){
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState( TURNS.X )
  // Null - no ganador, false - empate, true - ganador
  const [winner, setWinner] = useState( null )
  
  

  const resetGame = () =>
  {
    setBoard( Array( 9 ).fill( null ) );
    setTurn( TURNS.X );
    setWinner( null );
  }
    
  const checkEndGame = ( newBoard ) =>{
    return newBoard.every( square => square !== null );
  }
  //Actualizar tablero
  const updateBoard = ( index ) =>
    {
      //No actualizar si ya hay un valor
      if ( board[index] || winner ) return;

    
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard( newBoard );

    
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn( newTurn );
      
      //Actualizar ganador
      const newWinner = checkWinnerFrom(newBoard);
    if ( newWinner ){
        conffeti()
        setWinner( newWinner );
      } else if (checkEndGame(newBoard)){
        setWinner(false);
      }
    }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {board.map((square, index) => {
          return <Square key={index} index={index}
            updateBoard={updateBoard}>
              {square}
            </Square>;
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X} updateBoard={updateBoard}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    
      {
        winner !== null &&
        <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false ? 'Empate' :
                    `Ganador: ${winner}`
                }
              </h2>
              <header className="win">
                {winner && <Square>{ winner }</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Reiniciar el juego</button>
              </footer>
            </div>
        </section>
      }
    
    </main>
  );
}

export default App
