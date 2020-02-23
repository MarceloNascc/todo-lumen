import React from 'react';
import './style.css';

function reverseStr(string) {
  return string.split('-').reverse().join('/');
}

export default function Task(props) {
  return (
    <div className="card">
      <p className="deadline">{ reverseStr(props.deadline) }</p>
      <p className="description">{ props.description }</p>
      
      <div className="action-group">
        <div className="radio-group">
          <label htmlFor={ props.id + 'do' }>Fazer</label>
          <input id={ props.id + 'do' } type="radio" name={ props.id } value="do" defaultChecked={ props.status === 'Fazer' ? true : false } />

          <label htmlFor={ props.id + 'doing' }>Fazendo</label>
          <input id={ props.id + 'doing' } type="radio" name={ props.id } value="doing" defaultChecked={ props.status === 'Fazendo' ? true : false } />

          <label htmlFor={ props.id + 'done' }>Feito</label>
          <input id={ props.id + 'done' } type="radio" name={ props.id } value="done" defaultChecked={ props.status === 'Feito' ? true : false } />
        </div>

        <div className="btn-group2">
          <button className="edit-button"></button>
          <button className="remove-button"></button>
        </div>
      </div>
    </div>
  );
}