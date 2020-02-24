import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { styled } from '@material-ui/core/styles';

export default function RadioButton(props) {
  const RadioButton = styled(Radio)({
    color: '#FFFFFF',
    padding: 0
  });

  return (
    <FormControlLabel value={ props.value } label={ props.label } labelPlacement="top" control={ <RadioButton /> } />
  );
}