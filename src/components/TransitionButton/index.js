import React from 'react';
import './style.css';

export default function TransitionButton(props) {
  return (
    <button name={props.name} className={props.className} onClick={props.click}>{props.name}</button>
  );
}