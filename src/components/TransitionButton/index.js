import React from 'react';
import './style.css';

export default function TransitionButton(props) {
  return (
    <button className={props.className}>{props.name}</button>
  );
}