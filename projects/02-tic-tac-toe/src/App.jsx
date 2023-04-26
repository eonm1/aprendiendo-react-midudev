import { useState } from "react"
import conffeti from 'canvas-confetti'

import { Square } from "./components/Square";

import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";


function App(){
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board');
    const turnFromStorage = window.localStorage.getItem('turn');
    if (boardFromStorage && turnFromStorage) {
      return JSON.parse(boardFromStorage);
    }
    return Array( 9 ).fill( null )
  } )
    
  
    
  
  
  const [turn, setTurn] = useState( () =>
  {
    const turnFromStorage = window.localStorage.getItem( 'turn' )
    
    return turnFromStorage ? JSON.parse( turnFromStorage ) :
      TURNS.X
  } )
  // Null - no ganador, false - empate, true - ganador
  const [winner, setWinner] = useState( null )
  
  

  const resetGame = () =>
  {
    setBoard( Array( 9 ).fill( null ) );
    setTurn( TURNS.X );
    setWinner( null );

    window.localStorage.removeItem( 'board' );
    window.localStorage.removeItem('turn');
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
      //TODO : Guardar en localstorage
      window.localStorage.setItem('board', JSON.stringify(newBoard));
      window.localStorage.setItem('turn', JSON.stringify(newTurn));
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
    
      <WinnerModal resetGame={resetGame} winner={winner} />
    
    </main>
  );
}

export default App
