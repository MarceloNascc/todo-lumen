import React from 'react';
import './style.css';

import List from '../List';

export default function ToDoList(props) {
  return (
    <div className="container-todolist">
      <List add={ props.add } name="Fazer" tasks={props.do} />
      <List add={ props.add } name="Fazendo" tasks={props.doing} />
      <List add={ props.add } name="Feito" tasks={props.done} />
    </div>
  );
}