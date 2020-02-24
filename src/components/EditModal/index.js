import React, { Component } from 'react';
import './style.css';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import ActionButton from '../ActionButton';

export default class EditModal extends Component {
  state = {
    description: this.props.description,
    deadline: this.props.deadline
  };

  handleChange(event) {
    const value = event.target.name === 'description' ? event.target.value : new Date().getFullYear() + event.target.value.slice(4);

    this.setState({
      [event.target.name]: value
    });
  }

  handleUpdate(event) {
    this.props.update(this.props.id, {
      id: this.props.id,
      description: this.state.description,
      deadline: this.state.deadline,
      status: this.props.status
    });

    this.props.close();
  }

  render() {
    const ModalStyle = {
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const inputStyle = {
      width: '98%',
      marginBottom: '10px'
    };
  
    return (
      <Modal style={ModalStyle} open={ this.props.open } onClose={ this.props.close }>
        <div className="update-task">
            <TextField size="small" style={inputStyle} name="description" label="Tarefa" value={ this.state.description } onChange={ (event) => this.handleChange(event) } variant="outlined" />
            <TextField size="small" style={inputStyle} name="deadline" type="date" label="Prazo" value={ this.state.deadline } onChange={ (event) => this.handleChange(event) } variant="outlined" />

            <ActionButton color="#00C000" icon={ <Save /> } click={ (event) => this.handleUpdate(event) } />
        </div>
      </Modal>
    );
  }
}