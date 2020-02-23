import React, { Component } from 'react';
import './App.css';

import TransitionButton from './components/TransitionButton';
import ToDoList from './components/ToDoList';

export default class App extends Component {
  state = {
    buttonActive: 'TAREFAS',
    tasks: {
      do: [
        { 
          id: 1,
          deadline: '2020-02-25',
          description: 'Do not leave space for the element. Instead, position it at a specified position relative to the screens viewport and dont move it when scrolled. When printing, position it at that fixed position on every page. This value always create a new stacking context'
        },
        { 
          id: 2,
          deadline: '2020-02-23',
          description: 'Do not leave space for the element. Instead, position it at a s'
        },
        { 
          id: 3,
          deadline: '2020-03-03',
          description: 'TCC 1'
        }
      ],
      doing: [
        { 
          id: 4,
          deadline: '2020-02-25',
          description: 'Uma tarefa'
        },
        { 
          id: 5,
          deadline: '2020-02-23',
          description: 'Outra tarefa tarefa'
        },
        { 
          id: 6,
          deadline: '2020-03-03',
          description: 'TCC 1'
        }
      ],
      done: [
        { 
          id: 7,
          deadline: '2020-02-25',
          description: 'Uma tarefa'
        },
        { 
          id: 8,
          deadline: '2020-02-23',
          description: 'Outra tarefa tarefa'
        },
        { 
          id: 9,
          deadline: '2020-03-03',
          description: 'TCC 1'
        }
      ]
    }
  };

  handleClickTransition(event) {
    this.setState({
      buttonActive: event.target.name
    });
  }

  render() {
    const buttonActive = this.state.buttonActive;
    const tasks = this.state.tasks;

    return (
      <div className="app">
        <h1 id="title">PROCESSO SELETIVO - <span className="game">LUMEN GAMES</span></h1>

        <div className="btn-group">
          <TransitionButton name="TAREFAS" className={buttonActive === 'TAREFAS' ? 'btn active' : 'btn'} click={(event) => this.handleClickTransition(event)} />
          <TransitionButton name="CALENDÁRIO" className={buttonActive === 'CALENDÁRIO' ? 'btn active' : 'btn'} click={(event) => this.handleClickTransition(event)} />
        </div>

        <div className="container">
          <ToDoList do={tasks.do} doing={tasks.doing} done={tasks.done} />
        </div>
      </div>
    );
  }
}