import React, { Component } from 'react';
import moment from 'moment';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Pro gamer moment</h1>
        <h2>ello</h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
