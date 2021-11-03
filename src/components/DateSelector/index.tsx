import React, {useState} from 'react';

import {Container, Icon, Label, Touchable} from './styles';

interface IProps {
  onChange: (newMonth: number) => void;
  defaultMonth?: number;
  style?: [];
}

const DateSelector: React.FC<IProps> = ({
  onChange,
  defaultMonth = new Date().getMonth() - 1,
  style,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  const monthLabels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  function handleIncrementMonth() {
    if (selectedMonth + 1 < monthLabels.length) {
      onChange(selectedMonth + 1);
      setSelectedMonth(selectedMonth + 1);
    }
  }

  function handleDecrementMonth() {
    if (selectedMonth - 1 >= 0) {
      onChange(selectedMonth - 1);
      setSelectedMonth(selectedMonth - 1);
    }
  }

  return (
    <Container style={style}>
      <Touchable onPress={() => handleDecrementMonth()}>
        <Icon name="left" />
      </Touchable>
      <Label>{monthLabels[selectedMonth]}</Label>
      <Touchable onPress={() => handleIncrementMonth()}>
        <Icon name="right" />
      </Touchable>
    </Container>
  );
};

export default DateSelector;
