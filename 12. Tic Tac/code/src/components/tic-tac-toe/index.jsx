import { useEffect, useState } from "react";
import "./style.css";

export const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTac = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (getCurrentSquare) => {
    let copySquare = [...squares];
    if (getWInner(copySquare) || copySquare[getCurrentSquare]) return;
    copySquare[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquares(copySquare);
  };

  const getWInner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = getWInner(squares);
    if (winner) {
      setStatus(`Winner is ${winner}`);
    } else if (squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please Restart the Game");
    } else {
      setStatus(`Next Player is ${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);

  const handleRestart =()=>{
    setIsXturn(true)
    setSquares(Array(9).fill(""))
  }

  return (
    <div className="tic-tac-toe-component">

      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>


      <h1 style={{margin:"24px 0px"}}>{status}</h1>
      <button 
      style={{padding:"8px",
        border:"1px solid red",
        borderRadius: "4px",

      }}
      onClick={handleRestart}>Restart</button>

    </div>
  );
};

export default TicTac;
