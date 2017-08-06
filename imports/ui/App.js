import React from 'react';
import Board from './Board.js';
import './moveFunc.js';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Board/>
      </div>
    );
  };
}
