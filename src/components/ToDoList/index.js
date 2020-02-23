import React from 'react';
import './style.css';

import List from '../List';

export default function ToDoList(props) {
  return (
    <div className="container-todolist">
      <List name="Fazer" tasks={props.do} />
      <List name="Fazendo" tasks={props.doing} />
      <List name="Feito" tasks={props.done} />
    </div>
  );
}