import React, { Component } from 'react';
import './style.css';

import AddButton from '../AddButton';

export default class List extends Component {
  state = {
    assignment: '',
    deadline: new Date().toISOString().slice(0, 10)
  };

  handleChange(event) {
    const value = event.target.name === 'assignment' ?  event.target.value : new Date().getFullYear() + event.target.value.slice(4);

    this.setState({
      [event.target.name]: value
    });
  }

  render() {
    return (
      <div className="list">
        <div className="form">
          <div className="inputs">
            <input name="assignment" type="text" placeholder='Qual a tarefa?' value={this.state.assignment} onChange={(event) => this.handleChange(event)} />
            <input name="deadline" type="date" value={this.state.deadline} onChange={(event) => this.handleChange(event)} />
          </div>

          <AddButton />
        </div>

        <h2>{this.props.name}</h2>
      </div>
    );
  }
}