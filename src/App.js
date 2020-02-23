import React, { Component } from 'react';
import './App.css';

import TransitionButton from './components/TransitionButton'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 id="title">PROCESSO SELETIVO - <span className="game">LUMEN GAMES</span></h1>

        <div className="btn-group">
          <TransitionButton name="TAREFAS" className="btn" />
          <TransitionButton name="CALENDÁRIO" className="btn active" />
        </div>

        <div className="container"></div>
      </div>
    );
  }
}