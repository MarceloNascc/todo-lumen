import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/core/styles';

export default function SelectMonth(props) {
  const SelectMonth = styled(Select)({
    borderRadius: '5px',
    marginTop: '5px',
    backgroundColor: '#6DD5ED',
    width: '100px'

  });

  return (
    <SelectMonth value={props.value} onChange={props.change}>
      <MenuItem value={0}>Janeiro</MenuItem>
      <MenuItem value={1}>Fevereiro</MenuItem>
      <MenuItem value={2}>Março</MenuItem>
      <MenuItem value={3}>Abril</MenuItem>
      <MenuItem value={4}>Maio</MenuItem>
      <MenuItem value={5}>Junho</MenuItem>
      <MenuItem value={6}>Julho</MenuItem>
      <MenuItem value={7}>Agosto</MenuItem>
      <MenuItem value={8}>Setembro</MenuItem>
      <MenuItem value={9}>Outubro</MenuItem>
      <MenuItem value={10}>Novembro</MenuItem>
      <MenuItem value={11}>Dezembro</MenuItem>
    </SelectMonth>
  );
}