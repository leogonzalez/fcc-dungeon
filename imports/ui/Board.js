import React from 'react';
import Player from './Player.js';
import Wall from './Wall.js';

export default class Board extends React.Component {
  render(){
    return (
      <div id='board'>
        <Player/>
        <Wall/>
      </div>
    );
  };
}
