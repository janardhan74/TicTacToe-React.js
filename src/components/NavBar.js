import React from "react";

export default function NavBar({
  size,
  setSize,
  board,
  setBoard,
  matches,
  setMatches,
  winner,
  setWinner,
  SetPlayer,

  setMapsX,
  setMapsO,
}) {
  return (
    <div className="navbar">
      <div id="title">TicTacToe</div>

      <div className="options">
        <div className="customise">
          <button
            disabled={matches === 2}
            className="btn"
            onClick={() => {
              setMatches(matches - 1);
            }}
          >
            -
          </button>
          <p className="opt-name"> Matches : {matches} </p>
          <button
            disabled={matches === size}
            className="btn"
            onClick={() => {
              setMatches(matches + 1);
              // console.log(size)
            }}
          >
            +
          </button>
        </div>

        <div className="customise">
          <button
            className="btn"
            onClick={() => {
              setSize(size - 1);
              SetPlayer("X");
              setWinner(null);
              // **** temporay fix
              setMatches(size - 1);

              setBoard(
                new Array(size - 1)
                  .fill(null)
                  .map(() => new Array(size - 1).fill(" "))
              );
            }}
          >
            -
          </button>
          <p className="opt-name"> Size : {size} </p>
          <button
            className="btn"
            onClick={() => {
              setSize(size + 1);
              SetPlayer("X");
              setWinner(null);
              // **** temporray fix
              setMatches(size + 1);
              // console.log(size)
              setBoard(
                new Array(size + 1)
                  .fill(null)
                  .map(() => new Array(size + 1).fill(" "))
              );
            }}
          >
            +
          </button>

          <button
            className="clear"
            onClick={() => {
              setBoard(
                new Array(size).fill(null).map(() => new Array(size).fill(" "))
              );
              setWinner(null);
              SetPlayer("X");
              console.log(winner);
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
            }}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
}
