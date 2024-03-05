import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 

export function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index){
    const nextSquares = squares.slice();
    nextSquares[index] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() =>handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() =>handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() =>handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() =>handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() =>handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() =>handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() =>handleClick(8)} />
      </div>
      
    </>
  );

}

function Square({value, onSquareClick}) {

  // const [value, setValue] = useState(null); // what the hell is useState? -- it's a hook, a function that lets you use state in a functional component.

  // function handleClick(){
  //   setValue('X');
  // }

  return (<button className='square' onClick={onSquareClick}>{value}</button>);
}

export default function main_function () {
   return Board();
}

