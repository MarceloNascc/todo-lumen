import React, { Component } from 'react';
import './style.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';

import ActionButton from '../ActionButton';
import RadioButton from '../RadioButton';
import EditModal from '../EditModal';

function reverseStr(string) {
  return string.split('-').reverse().join('/');
}

export default class Task extends Component {
  state = {
    radioValue: this.props.status,
    modalIsOpen: false
  }

  handleChange(event) {
    this.props.move(this.props.id, event.target.value);
  }

  handleRemove(event) {
    this.props.remove(this.props.id);
  }

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
    return (
      <div className="card">
        <p className="deadline">{ reverseStr(this.props.deadline) }</p>
        <p className="description">{ this.props.description }</p>
        
        <div className="action-group">
          <RadioGroup row name={ `${this.props.id}` } value={ this.state.radioValue } onChange={ (event) => this.handleChange(event) } >
            <RadioButton value="do" label="Fazer" />
            <RadioButton value="doing" label="Fazendo" />
            <RadioButton value="done" label="Feito" />
          </RadioGroup>
  
          <div className="btn-group2">
            <ActionButton color="#2C2C54" icon={ <Edit /> } click={ (event) => this.handleOpenModal(event) } />
            <ActionButton color="#AA0001" icon={ <Delete /> } click={ (event) => this.handleRemove(event) } />
          </div>

          <EditModal update={ this.props.update } id={ this.props.id } status={ this.props.status } open={ this.state.modalIsOpen } close={ (event) => this.handleCloseModal(event) } description={ this.props.description } deadline={ this.props.deadline } />
        </div>
      </div>
    );
  }
}