import React, { Component } from 'react';
import './style.css';

import SelectMonth from '../SelectMonth';

export default class Calendar extends Component {
  state = {
    month: 0
  };

  daysOnMonth(month) {
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

  render() {
    return (
      <div className="container-calendar">
        <SelectMonth value={ this.state.month } change={ (event) => this.handleChange(event)} />
      </div>
    );
  }
}