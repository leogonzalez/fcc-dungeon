import React from 'react';
import Tile from './Tile.js';

const board = [...Array(306)].map((item,i) => i);

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerPos:25
    };
    this.movePlayer = this.movePlayer.bind(this);
  }
  movePlayer(event){
    switch (event.key) {
      case 'ArrowUp':
        this.setState((prevState) => ({playerPos:prevState.playerPos -18}));
        break;
      case 'ArrowDown':
        this.setState((prevState) => ({playerPos:prevState.playerPos +18}));
        break;
      case 'ArrowLeft':
        this.setState((prevState) => ({playerPos:prevState.playerPos -1}));
        break;
      case 'ArrowRight':
        this.setState((prevState) => ({playerPos:prevState.playerPos +1}));
        break;
    }
  }
  render(){

    return (
      <div id='board' onKeyDown={this.movePlayer} tabIndex='0'>

      {
        board.map((x,i) => {
            return (<Tile key={i} pos={i} player={i==this.state.playerPos}/>)
        })
      }

      </div>
    );
  };
}
