import { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setisXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPattens = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattens.length; i++) {
      const [x, y, z] = winningPattens[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }

    return null;
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setisXTurn(true);
  }

  function handleClick(getCurrentSquare) {
    let cpySquare = [...squares];
    if (getWinner(cpySquare) || cpySquare[getCurrentSquare]) {
      return;
    }
    cpySquare[getCurrentSquare] = isXTurn ? "X" : "O";
    setisXTurn(!isXTurn);
    setSquares(cpySquare);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is: ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tac-tac-toe-container">
      <div className="rows">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="rows">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="rows">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h2>{status}</h2>
        <button style={{ cursor: "pointer" }} onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}
