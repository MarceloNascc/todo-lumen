import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

function existTaskLate(tasks) {
  for (const task of tasks) {
    const taskDate = new Date(task.deadline);
    const currentDate = new Date();

    if(taskDate.getMonth() < currentDate.getMonth() || ((taskDate.getDate() + 1 < currentDate.getDate()) && (taskDate.getMonth() === currentDate.getMonth()))) {
      return true;
    }
  }

  return false;
}

export default function Day(props) {
  const backgroundBase = (props.tasksOnDay.do.length !== 0 || props.tasksOnDay.doing.length !== 0 || props.tasksOnDay.done.length !== 0) ? 'linear-gradient(to bottom, #2193B0, #1565C0)' : 'linear-gradient(to bottom, #BBD2C5, #536976)';
  
  const task = [...props.tasksOnDay.do, ...props.tasksOnDay.doing];
  const taskLate = existTaskLate(task)

  const Day = styled(Button)({
    fontSize: '3.2em',
    height: '15vh',
    width: '15vh',
    margin: '8px 8px 0px 0px',
    background: taskLate ? 'linear-gradient(to bottom, #FF0000, #B92B27)' : backgroundBase,
    borderRadius: '0px'
  });


  return (
    <Day onClick={ props.click }>{ props.number }</Day>
  );
}