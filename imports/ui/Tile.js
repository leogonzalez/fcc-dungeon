import React from 'react';

export default class Tite extends React.Component {
  render(){
    return (
      <div className={this.props.player?`tile player`:'tile'}>
        {this.props.pos}
      </div>
    );
  };
}
