import React, { Component } from 'react';
import './App.css';

import TransitionButton from './components/TransitionButton';
import ToDoList from './components/ToDoList';

export default class App extends Component {
  state = {
    currentId: 0,
    buttonActive: 'TAREFAS',
    tasks: {
      do: [],
      doing: [],
      done: []
    }
  };

  handleClickTransition(event) {
    this.setState({
      buttonActive: event.target.name
    });
  }

  handleAddTask(description, deadline, listName) {
    switch(listName) {
      case 'Fazer':
        this.setState({
          tasks: {
            do: [{
              id: this.state.currentId,
              description,
              deadline
            }, ...this.state.tasks.do],
            doing: [...this.state.tasks.doing],
            done: [...this.state.tasks.done],
          },
          currentId: this.state.currentId + 1
        });

        break;

      case 'Fazendo':
        this.setState({
          tasks: {
            doing: [{
              id: this.state.currentId,
              description,
              deadline
            }, ...this.state.tasks.doing],
            do: [...this.state.tasks.do],
            done: [...this.state.tasks.done],
          },
          currentId: this.state.currentId + 1
        });

        break;
      
      default:
        this.setState({
          tasks: {
            done: [{
              id: this.state.currentId,
              description,
              deadline
            }, ...this.state.tasks.done],
            doing: [...this.state.tasks.doing],
            do: [...this.state.tasks.do],
          },
          currentId: this.state.currentId + 1
        });
    }
  }

  handleRemoveTask(id, listName) {
    switch(listName) {
      case 'Fazer':
        this.setState({
          tasks: {
            do: this.state.tasks.do.filter(task => task.id !== id),
            doing: [...this.state.tasks.doing],
            done: [...this.state.tasks.done],
          }
        });

        break;

      case 'Fazendo':
        this.setState({
          tasks: {
            doing: this.state.tasks.doing.filter(task => task.id !== id),
            do: [...this.state.tasks.do],
            done: [...this.state.tasks.done],
          }
        });

        break;
      
      default:
        this.setState({
          tasks: {
            done: this.state.tasks.done.filter(task => task.id !== id),
            doing: [...this.state.tasks.doing],
            do: [...this.state.tasks.do],
          }
        });
    }
  }

  handleUpdateTask(id, listName, newTask) {
    switch(listName) {
      case 'Fazer':
        this.setState({
          tasks: {
            do: this.state.tasks.do.map(task => {
              if(task.id !== id) {
                return task;
              } else {
                return newTask;
              }
            }),
            doing: [...this.state.tasks.doing],
            done: [...this.state.tasks.done],
          }
        });

        break;

      case 'Fazendo':
        this.setState({
          tasks: {
            doing: this.state.tasks.doing.map(task => {
              if(task.id !== id) {
                return task;
              } else {
                return newTask;
              }
            }),
            do: [...this.state.tasks.do],
            done: [...this.state.tasks.done],
          }
        });

        break;
      
      default:
        this.setState({
          tasks: {
            done: this.state.tasks.done.map(task => {
              if(task.id !== id) {
                return task;
              } else {
                return newTask;
              }
            }),
            doing: [...this.state.tasks.doing],
            do: [...this.state.tasks.do],
          }
        });
    }
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
          <ToDoList update={ (id, listName, newTask) => this.handleUpdateTask(id, listName, newTask) } remove={ (id, listName) => this.handleRemoveTask(id, listName) } add={ (description, deadline, listName) => this.handleAddTask(description, deadline, listName) } do={tasks.do} doing={tasks.doing} done={tasks.done} />
        </div>
      </div>
    );
  }
}