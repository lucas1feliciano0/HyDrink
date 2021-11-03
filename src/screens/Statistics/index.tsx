import React, {useContext, useMemo, useState} from 'react';
import {format, parseISO} from 'date-fns';
import {ThemeContext} from 'styled-components/native';
import {useSelector} from 'react-redux';
import {groupBy} from 'underscore';

import {RootState} from '@store/ducks';

import {
  Container,
  DateSelector,
  DayStatisticsCard,
  Illustration,
  IllustrationContainer,
  NoRegisterContainer,
  StatusBar,
  Subtitle,
} from './styles';

const Statistics: React.FC = () => {
  const theme = useContext(ThemeContext);

  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() - 1,
  );

  const cups = useSelector((state: RootState) => state.drinks.cups).filter(
    cup => parseISO(cup.created_at).getMonth() - 1 === selectedMonth,
  );

  const cards = useMemo(() => {
    function organizeCups() {
      const cupsByDay = groupBy(
        cups
          .sort(
            (cup1, cup2) =>
              parseISO(cup2.created_at).getTime() -
              parseISO(cup1.created_at).getTime(),
          )
          .map(cup => ({
            created_at: format(parseISO(cup.created_at), 'dd/MM/yyyy'),
          })),
        'created_at',
      );

      return cupsByDay;
    }
    return Object.keys(organizeCups()).map((day, index) => (
      <DayStatisticsCard
        key={index}
        date={day}
        cups={organizeCups()[day].length}
      />
    ));
  }, [cups]);

  return (
    <Container>
      <StatusBar />
      <DateSelector onChange={setSelectedMonth} />

      {cards.length > 0 ? (
        cards
      ) : (
        <NoRegisterContainer>
          <IllustrationContainer>
            <Illustration width={theme.wp('65%')} height={theme.hp('30%')} />
          </IllustrationContainer>
          <Subtitle>
            Nenhum resultado encontrado para o mês selecionado.
          </Subtitle>
        </NoRegisterContainer>
      )}
    </Container>
  );
};

export default Statistics;
