import React, { Component } from 'react';
import './style.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';

import ActionButton from '../ActionButton';
import RadioButton from '../RadioButton';

function reverseStr(string) {
  return string.split('-').reverse().join('/');
}

export default class Task extends Component {
  state = {
    radioValue: ''
  }

  componentDidMount() {
    switch(this.props.status) {
      case 'Fazer':
        this.setState({
          radioValue: 'do'
        });

        break;
      
      case 'Fazendo':
        this.setState({
          radioValue: 'doing'
        });

        break;

      default:
        this.setState({
          radioValue: 'done'
        });
    }
  }

  handleChange(event) {
    this.setState({
      radioValue: event.target.value
    });
  }

  render() {
    return (
      <div className="card">
        <p className="deadline">{ reverseStr(this.props.deadline) }</p>
        <p className="description">{ this.props.description }</p>
        
        <div className="action-group">
          <RadioGroup row name={ this.props.id } value={ this.state.radioValue } onChange={ (event) => this.handleChange(event) } >
            <RadioButton value="do" label="Fazer" />
            <RadioButton value="doing" label="Fazendo" />
            <RadioButton value="done" label="Feito" />
          </RadioGroup>
  
          <div className="btn-group2">
            <ActionButton color="#d1bb30" icon={ <Edit /> } />
            <ActionButton color="#AA0001" icon={ <Delete /> } />
          </div>
        </div>
      </div>
    );
  }
}