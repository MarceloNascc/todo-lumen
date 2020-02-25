import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import DayTasksModal from '../DayTasksModal';

function existTaskLate(tasks) {
  if(tasks.length !== 0) {
    const taskDate = new Date(tasks[0].deadline);
    const currentDate = new Date();

    if(taskDate.getMonth() < currentDate.getMonth() || ((taskDate.getDate() + 1 < currentDate.getDate()) && (taskDate.getMonth() === currentDate.getMonth()))) {
      return true;
    }
  }

  return false;
}

export default class Day extends Component {
  state = {
    modalIsOpen: false
  };

  handleOpenModal(event) {
    this.setState({
      modalIsOpen: true
    });
  }

  handleCloseModal(event) {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const backgroundBase = (this.props.tasksOnDay.do.length !== 0 || this.props.tasksOnDay.doing.length !== 0 || this.props.tasksOnDay.done.length !== 0) ? 'linear-gradient(to bottom, #2193B0, #1565C0)' : 'linear-gradient(to bottom, #BBD2C5, #536976)';
  
    const task = [...this.props.tasksOnDay.do, ...this.props.tasksOnDay.doing];
    const taskLate = existTaskLate(task);

    const Day = styled(Button)({
      fontSize: '3.2em',
      height: '15vh',
      width: '15vh',
      margin: '8px 8px 0px 0px',
      background: taskLate ? 'linear-gradient(to bottom, #FF0000, #B92B27)' : backgroundBase,
      borderRadius: '0px'
    });  

    return (
      <>
        <Day onClick={ (event) => this.handleOpenModal(event) } >{ this.props.number }</Day>
        <DayTasksModal do={ this.props.tasksOnDay.do } doing={ this.props.tasksOnDay.doing } done={ this.props.tasksOnDay.done } day={ this.props.number } open={ this.state.modalIsOpen } close={ (event) => this.handleCloseModal(event) } />
      </>
    );
  }
}