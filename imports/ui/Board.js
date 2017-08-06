import React from 'react';
import Tile from './Tile.js';

const squares = 306;
const rows = 306/18;
const columns = 306/rows;
const board = [...Array(squares)].map((item,i) => i);

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerPos:{
        X: 5,
        Y: 5
      }
    };
    this.movePlayer = this.movePlayer.bind(this);
  }
  movePlayer(event){
    switch (event.key) {
      case 'ArrowUp':
        this.setState((prevState) => ({playerPos:{
          Y:prevState.playerPos.Y - 1?,
          X:prevState.playerPos.X
        }}));
        break;
      case 'ArrowDown':
      this.setState((prevState) => ({playerPos:{
        Y:prevState.playerPos.Y + 1,
        X:prevState.playerPos.X
      }}));
        break;
      case 'ArrowLeft':
      this.setState((prevState) => ({playerPos:{
        Y:prevState.playerPos.Y,
        X:prevState.playerPos.X -1
      }}));
        break;
      case 'ArrowRight':
      this.setState((prevState) => ({playerPos:{
        Y:prevState.playerPos.Y,
        X:prevState.playerPos.X +1
      }}));
        break;
    }
  }
  render(){

    return (
      <div id='board' onKeyDown={this.movePlayer} tabIndex='0'>

      {
        board.map((x,i) => {
          const Y=Math.floor(i/columns);
          const X=i%columns;
            return (<Tile key={i} pos={`${Y}|${X}`} player={X==this.state.playerPos.X && Y==this.state.playerPos.Y}/>)
        })
      }

      </div>
    );
  };
}
