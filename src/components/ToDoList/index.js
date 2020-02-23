import React from 'react';
import './style.css';

import List from '../List';

export default function ToDoList() {
  return (
    <div className="container-todolist">
      <List name="Fazer" />
      <List name="Fazendo" />
      <List name="Feito" />
    </div>
  );
}