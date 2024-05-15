import React, {  useEffect } from "react";
import Square from "./Square";

export default function TicTacToe({
  size,
  board,
  setBoard,
  matches,
  winner,
  setWinner,
  player,
  SetPlayer,
  mapsX,
  setMapsX,
  mapsO,
  setMapsO,
}) {
  // console.log(matches , winner , player)

  //   function createArray(){
  //     let arr = []
  //     for(let i=0;i<val;i++) arr.push(0)
  //     console.log(arr)
  //     return arr;
  //   }

  // console.log(
  //   mapsX.horizantalMap,
  //   mapsX.verticalMap,
  //   mapsX.lTor,
  //   mapsX.rTol
  // );

  useEffect(() => {
    setMapsX({
      horizantalMap: new Array(size).fill(0),
      verticalMap: new Array(size).fill(0),
      lTor: new Array(2 * size - 1).fill(0),
      rTol: new Array(2 * size - 1).fill(0),
    });
    setMapsO({
      horizantalMap: new Array(size).fill(0),
      verticalMap: new Array(size).fill(0),
      lTor: new Array(2 * size - 1).fill(0),
      rTol: new Array(2 * size - 1).fill(0),
    });
  }, [size]);

  function playMove(i, j) {
    if (board[i][j] !== " ") {
      return;
    }
    const nextBoard = board.slice();
    nextBoard[i][j] = player;
    setBoard(nextBoard);
    // console.log( board)
    updateMap(i, j);
    checkWinner();

    if (player === "X") SetPlayer("O");
    if (player === "O") SetPlayer("X");
  }

  function updateMap(i, j) {
    if (player === "X") {
      mapsX.horizantalMap[i] += 1;
      mapsX.verticalMap[j] += 1;
      mapsX.lTor[i + size - j - 1] += 1;
      mapsX.rTol[i + j] += 1;
    } else if (player === "O") {
      mapsO.horizantalMap[i] += 1;
      mapsO.verticalMap[j] += 1;
      mapsO.lTor[i + size - j - 1] += 1;
      mapsO.rTol[i + j] += 1;
      console.log(mapsO.rTol);
    }
  }

  function checkWinner() {
    if (
      mapsX.horizantalMap.indexOf(matches) !== -1 ||
      mapsX.verticalMap.indexOf(matches) !== -1 ||
      mapsX.lTor.indexOf(matches) !== -1 ||
      mapsX.rTol.indexOf(matches) !== -1
    ) {
      
      console.log("in check winner", matches, winner, player);
      setWinner("X");
    } else if (
      mapsO.horizantalMap.indexOf(matches) !== -1 ||
      mapsO.verticalMap.indexOf(matches) !== -1 ||
      mapsO.lTor.indexOf(matches) !== -1 ||
      mapsO.rTol.indexOf(matches) !== -1
    ) {
      setWinner("O");
    }
  }
  return (
    <div className="container">
      <div className="status">
        <h3>{winner ? "Winner : " + winner : "Current Player : " + player} </h3>
      </div>
      <div className="board">
        {board.map((arr, i) => {
          return (
            <span className="row" key={i}>
              {arr.map((ele, j) => {
                return (
                  <Square
                    key={j}
                    value={ele}
                    i={i}
                    j={j}
                    playMove={playMove}
                    winner={winner}
                  />
                );
              })}
            </span>
          );
        })}
      </div>
    </div>
  );
}
