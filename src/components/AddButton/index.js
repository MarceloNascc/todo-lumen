import React from 'react';
import './style.css';

export default function AddButton(props) {
  return (
    <button className="add-button" onClick={ props.click }></button>
  );
}