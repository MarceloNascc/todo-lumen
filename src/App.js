import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 id="title">PROCESSO SELETIVO - LUMEN GAMES</h1>

        <div className="btn-container">
          <button>TAREFAS</button>
          <button>CALENDÁRIO</button>
        </div>

        <div className="container"></div>
      </div>
    );
  };
}