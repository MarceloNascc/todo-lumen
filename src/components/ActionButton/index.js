import React from 'react';
import { IconButton } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export default function ActionButton(props) {
  const ActionButton = styled(IconButton)({
    color: props.color
  });


  return (
    <ActionButton onClick={ props.click }>{ props.icon }</ActionButton>
  );
}