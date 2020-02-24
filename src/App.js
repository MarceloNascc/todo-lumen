import React, { Component } from 'react';
import './App.css';

import TransitionButton from './components/TransitionButton';
import ToDoList from './components/ToDoList';
import Calendar from './components/Calendar';

export default class App extends Component {
  state = {
    currentId: 0,
    buttonActive: 'TAREFAS',
    listTasks: []
  };

  handleClickTransition(event) {
    this.setState({
      buttonActive: event.target.name
    });
  }

  handleAddTask(task) {
    task.id = this.state.currentId;

    this.setState({
      listTasks: [task, ...this.state.listTasks],
      currentId: this.state.currentId + 1
    });
  }

  handleRemoveTask(id) {
    this.setState({
      listTasks: this.state.listTasks.filter(task => task.id !== id)
    });
  }

  handleUpdateTask(id, newTask) {
    this.setState({
      listTasks: this.state.listTasks.map(task => {
        if(task.id !== id) {
          return task;
        } else {
          return newTask;
        }
      })
    });
  }

  handleMoveTask(id, destiny) {
    this.setState({
      listTasks: this.state.listTasks.map(task => {
        if(task.id !== id) {
          return task;
        } else {
          const newTask = {
            ...task,
            status: destiny
          };

          return newTask;
        }
      })
    });
  }

  render() {
    const buttonActive = this.state.buttonActive;
    let tasksDo = [], tasksDoing = [], tasksDone = [];

    this.state.listTasks.forEach(task => {
      if(task.status === 'do'){
        tasksDo.push(task);
      } else if (task.status === 'doing') {
        tasksDoing.push(task);
      } else {
        tasksDone.push(task);
      }
    });

    return (
      <div className="app">
        <h1 id="title">PROCESSO SELETIVO - <span className="game">LUMEN GAMES</span></h1>

        <div className="btn-group">
          <TransitionButton name="TAREFAS" className={buttonActive === 'TAREFAS' ? 'btn active' : 'btn'} click={(event) => this.handleClickTransition(event)} />
          <TransitionButton name="CALENDÁRIO" className={buttonActive === 'CALENDÁRIO' ? 'btn active' : 'btn'} click={(event) => this.handleClickTransition(event)} />
        </div>

        <div className="container">
          { this.state.buttonActive === 'TAREFAS' ? (
            <ToDoList move={ (id, destiny) => this.handleMoveTask(id, destiny) } update={ (id, newTask) => this.handleUpdateTask(id, newTask) } remove={ (id) => this.handleRemoveTask(id) } add={ (task) => this.handleAddTask(task) } do={tasksDo} doing={tasksDoing} done={tasksDone} />
          ) : (
            <Calendar do={tasksDo} doing={tasksDoing} done={tasksDone} />
          )}
        </div>
      </div>
    );
  }
}