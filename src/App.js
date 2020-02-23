import React, { Component } from 'react';
import './App.css';

import TransitionButton from './components/TransitionButton';
import ToDoList from './components/ToDoList';

export default class App extends Component {
  state = {
    buttonActive: 'TAREFAS'
  }

  handleClickTransition(event) {
    event.preventDefault();

    this.setState({
      buttonActive: event.target.name
    });
  }

  render() {
    const buttonActive = this.state.buttonActive;

    return (
      <div className="app">
        <h1 id="title">PROCESSO SELETIVO - <span className="game">LUMEN GAMES</span></h1>

        <div className="btn-group">
          <TransitionButton name="TAREFAS" className={buttonActive === 'TAREFAS' ? 'btn active' : 'btn'} click={(event) => this.handleClickTransition(event)} />
          <TransitionButton name="CALENDÁRIO" className={buttonActive === 'CALENDÁRIO' ? 'btn active' : 'btn'} click={(event) => this.handleClickTransition(event)} />
        </div>

        <div className="container">
          <ToDoList />
        </div>
      </div>
    );
  }
}