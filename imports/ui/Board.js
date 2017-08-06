import React from 'react';
import Tile from './Tile.js';

const board = [...Array(306)].map((item,i) => i);

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerPos:25
    };
  }
  movePlayer(){
    let newState = {};
    document.addEventListener('keydown',(e) => {
      switch (e.code) {
        case 'ArrowDown':
          const position = this.state.playerPos + 18;
          this.setState({playerPos:position});
          newState.playerPos = position;
          break;
      }
    });

  }
  render(){
    this.movePlayer();
    return (
      <div id='board'>

      {
        board.map((x,i) => {
            return (<Tile key={i} pos={i} player={i==this.state.playerPos}/>)
        })
      }

      </div>
    );
  };
}
