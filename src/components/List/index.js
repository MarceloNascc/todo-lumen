import React, { Component } from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';
import { AddCircle } from '@material-ui/icons';

import ActionButton from '../ActionButton'; //usado como addButton
import Task from '../Task';

export default class List extends Component {
  state = {
    description: '',
    deadline: new Date().toISOString().slice(0, 10)
  };

  handleChange(event) {
    const value = event.target.name === 'description' ? event.target.value : new Date().getFullYear() + event.target.value.slice(4);

    this.setState({
      [event.target.name]: value
    });
  }

  handleAdd(event) {
    if (this.state.description.length !== 0 && this.state.deadline !== '2020') {
      this.props.add({
        description: this.state.description,
        deadline: this.state.deadline,
        status: this.props.name
      });

      this.setState({
        description: '',
        deadline: new Date().toISOString().slice(0, 10)
      });
    }
  }

  getNameList(string) {
    switch(string) {
      case 'do':
        return 'Fazer';
      
      case 'doing':
        return 'Fazendo';

      default:
        return 'Feito';
    }
  }

  render() {
    const inputStyle = {
      width: '98%',
      marginBottom: '5px'
    };

    return (
      <div className="list">
        <div className="form">
          <div className="inputs">
            <TextField size="small" style={inputStyle} name="description" label="Tarefa" value={ this.state.description } onChange={ (event) => this.handleChange(event) } variant="outlined" />
            <TextField size="small" style={inputStyle} name="deadline" type="date" label="Prazo" value={ this.state.deadline } onChange={ (event) => this.handleChange(event) } variant="outlined" />
          </div>

          <ActionButton color="#00C000" icon={ <AddCircle /> } click={(event) => this.handleAdd(event)} />
        </div>

        <h2>{ this.getNameList(this.props.name) }</h2>

        {this.props.tasks.map((task) => (
          <Task move={ this.props.move } update={ this.props.update } remove={ this.props.remove } key={ task.id } id={ task.id } status={ task.status } deadline={ task.deadline } description={ task.description } />
        ))}
      </div>
    );
  }
}