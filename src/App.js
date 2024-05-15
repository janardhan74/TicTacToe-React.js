import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToeFun";
import NavBar from "./components/NavBar";

export default function App() {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(
    new Array(size).fill(null).map(() => new Array(size).fill(" "))
  );
  const [matches, setMatches] = useState(size);
  const [winner, setWinner] = useState(null);
  const [player, SetPlayer] = useState("X");


  const [mapsX, setMapsX] = useState({
    horizantalMap: null,
    verticalMap: null,
    lTor: null,
    rTol: null,
  });
  const [mapsO, setMapsO] = useState({
    horizantalMap: null,
    verticalMap: null,
    lTor: null,
    rTol: null,
  });


  return (
    <div>
      <NavBar
        size={size}
        setSize={setSize}
        board={board}
        setBoard={setBoard}
        matches={matches}
        setMatches={setMatches}
        winner={winner}
        setWinner={setWinner}
        SetPlayer={SetPlayer}

        setMapsX={setMapsX}
        setMapsO={setMapsO}
      ></NavBar>
      <div className="main">
        <TicTacToe
          size={size}
          board={board}
          setBoard={setBoard}
          matches={matches}
          winner={winner}
          setWinner={setWinner}
          player={player}
          SetPlayer={SetPlayer}

          mapsX={mapsX}
          setMapsX={setMapsX}
          mapsO={mapsO}
          setMapsO={setMapsO}
        />
      </div>
    </div>
  );
}
