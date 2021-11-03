import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

import {quantity} from '@util/cups';

import DrinkSvg from '@assets/svg/drink.svg';

import {
  Container,
  Icon,
  IconContainer,
  InfoSection,
  Label,
  Title,
} from './styles';

interface IProps {
  cups: number;
  date: string;
  style?: [];
}

const DayStatisticsCard: React.FC<IProps> = ({cups, date, style}) => {
  const theme = useContext(ThemeContext);

  return (
    <Container style={style}>
      <IconContainer>
        <DrinkSvg width={theme.wp('25%')} height={theme.wp('23%')} />
      </IconContainer>
      <InfoSection>
        <Label>{date}</Label>
        <Title>
          {cups}/{quantity} <Icon />
        </Title>
      </InfoSection>
    </Container>
  );
};

export default DayStatisticsCard;
