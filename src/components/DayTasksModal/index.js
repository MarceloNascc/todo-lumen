import React from 'react';
import './style.css';
import Modal from '@material-ui/core/Modal';
import { styled } from '@material-ui/core/styles';

export default function DayTasksModal(props) {
  const DayTasksModal = styled(Modal)({
    color: '#2193B0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  return (
    <DayTasksModal open={ props.open } onClose={ props.close }>
      <div className="day-tasks">
        <h2 className="title-day-modal">{ `Dia ${props.day}` }</h2>

        <div className="content">
          <div className="tasks">
            <h3>Fazer</h3>
            <ul>
              { props.do.map(task => <li key={ task.id }>{ task.description }</li>) }
            </ul>
          </div>
          <div className="tasks">
            <h3>Fazendo</h3>
            <ul>
              { props.doing.map(task => <li key={ task.id }>{ task.description }</li>) }
            </ul>
          </div>
          <div className="tasks">
            <h3>Feito</h3>
            <ul>
              { props.done.map(task => <li key={ task.id }>{ task.description }</li>) }
            </ul>
          </div>
        </div>
      </div>
    </DayTasksModal>
  );
}