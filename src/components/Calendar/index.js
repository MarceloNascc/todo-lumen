import React, { Component } from 'react';
import './style.css';

import SelectMonth from '../SelectMonth';
import Day from '../Day';

export default class Calendar extends Component {
  state = {
    month: 0
  };

  quantityDaysOnMonth(month) {
    const days = [30, 31];
  
    if(month !== 1) {
      return days[(month + (month < 7 ? 1 : 0)) % 2];
    } else {
      return ((new Date().getFullYear() % 4 === 0) && ((new Date().getFullYear() % 100 !== 0 ) || (new Date().getFullYear() % 400 === 0))) ? 29 : 28;
    }
  }

  handleChange(event) {
    this.setState({
      month: event.target.value
    });
  }

  filterByMonthAndDay(day) {
    const tasksDo = this.props.do.filter(task => {
      const date = new Date(task.deadline);

      return (date.getMonth() === this.state.month) && (date.getDate() === day);
    });

    const tasksDoing = this.props.doing.filter(task => {
      const date = new Date(task.deadline);

      return (date.getMonth() === this.state.month) && (date.getDate() === day);
    });

    const tasksDone = this.props.done.filter(task => {
      const date = new Date(task.deadline);

      return (date.getMonth() === this.state.month) && (date.getDate() === day);
    });

    return {
      do: tasksDo,
      doing: tasksDoing,
      done: tasksDone
    };
  }

  renderDays() {
    let days = [];
    for(let i = 0; i < this.quantityDaysOnMonth(this.state.month); i++) {
      days.push(<Day key={ i } number={i + 1} tasksOnDay={ this.filterByMonthAndDay(i) } />);
    }

    return days;
  }

  render() {
    return (
      <div className="container-calendar">
        <SelectMonth value={ this.state.month } change={ (event) => this.handleChange(event)} />

        <div className="days-month">
          { this.renderDays() }
        </div>
      </div>
    );
  }
}