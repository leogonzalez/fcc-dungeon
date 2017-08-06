import React from 'react';
import Player from './Player.js';

export default class Board extends React.Component {
  render(){
    return (
      <div id='board'>
        <Player/>
      </div>
    );
  };
}
