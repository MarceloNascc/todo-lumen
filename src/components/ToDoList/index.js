import React from 'react';
import './style.css';

import List from '../List';

export default function ToDoList(props) {
  return (
    <div className="container-todolist">
      <List move={ props.move } update={ props.update } remove={ props.remove } add={ props.add } name="do" tasks={props.do} />
      <List move={ props.move } update={ props.update } remove={ props.remove } add={ props.add } name="doing" tasks={props.doing} />
      <List move={ props.move } update={ props.update } remove={ props.remove } add={ props.add } name="done" tasks={props.done} />
    </div>
  );
}