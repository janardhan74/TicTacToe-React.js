import React, { Component, useState } from "react";
import Square from "./Square";

export default class TacTicToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "X",
      winner: null,
    };
  }
  
  componentDidMount(){
    this.setState(()=>({
      horizantalMapX: new Array(this.props.size).fill(0),
      verticalMapX: new Array(this.props.size).fill(0),
      hi: console.log("size in "+ (2 * this.props.size - 1)),
      lTorX: new Array(20).fill(0), // temporary fix ***
      rTolX: new Array(20).fill(0),
      horizantalMapO: new Array(this.props.size).fill(0),
      verticalMapO: new Array(this.props.size).fill(0),
      lTorO: new Array(20).fill(0), // temporary fix ***
      rTolO: new Array(20).fill(0),
    }) , this.render)
  }
  /*
  // let val = 2*props.size-1;
  const [player, SetPlayer] = useState("X");
  // const [props.board , setBoard] = useState(new Array(props.size).fill(null).map(() => new Array(props.size).fill(' ')))
  const [winner, setWinner] = useState(null);
  // console.log(props.board)
  const [this.state, setMapsX] = useState({
    horizantalMapX: new Array(props.size).fill(0),
    verticalMapX: new Array(props.size).fill(0),
    hi : console.log(2*props.size+1),
    lTorX: new Array(2*props.size+1).fill(0), // temporary cntrl ***
    rTolX: new Array(2*props.size+1).fill(0),// temporary cntrl ***
  });

  const [this.state , setMapsO] = useState({
    horizantalMapO: new Array(props.size).fill(0),
    verticalMapO: new Array(props.size).fill(0),
    lTorO: new Array(2*props.size+1).fill(0),// temporary cntrl ***
    rTolO: new Array(2*props.size+1).fill(0),// temporary cntrl ***
  })

*/

  //   function createArray(){
  //     let arr = []
  //     for(let i=0;i<val;i++) arr.push(0)
  //     console.log(arr)
  //     return arr;
  //   }

  playMove = (i, j) => {
    
    if (this.props.board[i][j] !== " ") {
      return;
    }
    const nextBoard = this.props.board.slice();
    nextBoard[i][j] = this.state.player;
    this.props.setBoard(nextBoard);
    // console.log(props.board)
    this.updateMap(i, j);
    this.checkWinner();
    console.log(this.state.player)
    if (this.state.player === "X") {
      console.log("working")
      this.setState({
        player:"O"
      })
    }
    if (this.state.player === "O"){
      this.setState({
        player:"X"
      })
    }
  };

  updateMap = (i, j) => {
    if (this.state.player === "X") {
      this.state.horizantalMapX[i] += 1;
      this.state.verticalMapX[j] += 1;
      this.state.lTorX[i + this.props.size - j - 1] += 1;
      this.state.rTolX[i + j] += 1;
      // console.log(maps.horizantalMapX)
      // console.log(maps.verticalMapX)
      console.log("arr");
      console.log(this.state.lTorX);
      // console.log(maps.rTolX)
    } else if (this.state.player === "O") {
      this.state.horizantalMapO[i] += 1;
      this.state.verticalMapO[j] += 1;
      this.state.lTorO[i + this.props.size - j - 1] += 1;
      this.state.rTolO[i + j] += 1;
      // console.log(maps.horizantalMapO)
      // console.log(maps.verticalMapO)
      // console.log(maps.lTorO)
      // console.log(maps.rTolO)
    }
  };

  checkWinner = () => {
    if (
      this.state.horizantalMapX.indexOf(this.props.matches) !== -1 ||
      this.state.verticalMapX.indexOf(this.props.matches) !== -1 ||
      this.state.lTorX.indexOf(this.props.matches) !== -1 ||
      this.state.rTolX.indexOf(this.props.matches) !== -1
    ) {
      this.setState({
        winner:"X"
      })
    } else if (
      this.state.horizantalMapO.indexOf(this.props.matches) !== -1 ||
      this.state.verticalMapO.indexOf(this.props.matches) !== -1 ||
      this.state.lTorO.indexOf(this.props.matches) !== -1 ||
      this.state.rTolO.indexOf(this.props.matches) !== -1
    ) {
      this.setState({
        winner:"O"
      })
    }
  };

  render() {
    return (
      <div className="container">
        <div className="status">
          <h3>
            {this.state.winner ? "Winner : " + this.state.winner : "Current Player : " + this.state.player}{" "}
          </h3>
        </div>
        <div className="board">
          {/* <Square val={2}/> */}

          {this.props.board.map((arr, i) => {
            return (
              <span className="row" key={i}>
                {arr.map((ele, j) => {
                  return (
                    <Square
                      key={j}
                      value={ele}
                      i={i}
                      j={j}
                      playMove={this.playMove}
                      winner={this.state.winner}
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
}
