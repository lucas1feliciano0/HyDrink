import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MotiView} from 'moti';
import {useAnimationState} from '@motify/core';
import messaging from '@react-native-firebase/messaging';

import texts from '@util/texts';
import {quantity, defaultMl} from '@util/cups';

import {RootState} from '@store/ducks';
import {Creators} from '@store/ducks/drinks';

import {
  AddCupButton,
  Container,
  Drop,
  RemoveCupButton,
  Section,
  StatusBar,
  Subtitle,
  Title,
  UndoIcon,
  InvisibleView,
  CupIcon,
  CupsContainer,
  CongratsModal,
} from './styles';
import {isToday, isValid, parseISO} from 'date-fns';

const useFadeInDown = () => {
  return useAnimationState({
    from: {
      opacity: 0,
      translateY: -15,
    },
    to: {
      opacity: 1,
      translateY: 0,
    },
  });
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const textAnimation = useFadeInDown();
  const mlTextAnimation = useFadeInDown();

  const [activeText, setActiveText] = useState(0);
  const [hasNotification, setHasNotification] = useState(true);

  const cups = useSelector((state: RootState) => state.drinks.cups).filter(
    cup =>
      isValid(cup.created_at)
        ? isToday(cup.created_at)
        : isToday(parseISO(cup.created_at)),
  );

  function getPercentage() {
    const total = quantity;
    const percentage = (cups.length * 100) / total;

    return percentage.toFixed(0);
  }

  function handleAddDrink() {
    const newCup = {
      created_at: new Date(),
    };

    dispatch(Creators.addCup(newCup));

    mlTextAnimation.transitionTo(() => 'from');

    setTimeout(() => {
      mlTextAnimation.transitionTo(() => 'to');
    }, 200);
  }

  function handleDeleteDrink() {
    dispatch(Creators.removeCup());
    mlTextAnimation.transitionTo(() => 'from');

    setTimeout(() => {
      mlTextAnimation.transitionTo(() => 'to');
    }, 200);
  }

  useEffect(() => {
    const changeTextInterval = setInterval(() => {
      if (activeText + 1 < texts.length) {
        setActiveText(activeText + 1);
      } else {
        setActiveText(0);
      }

      textAnimation.transitionTo(state => {
        if (state === 'from') {
          return 'to';
        } else {
          return 'from';
        }
      });
    }, 3000);

    return () => {
      clearInterval(changeTextInterval);
    };
  }, [activeText, textAnimation]);

  useEffect(() => {
    messaging().subscribeToTopic('general');

    const unsubscribe = messaging().onMessage(async () => {
      setHasNotification(true);

      setTimeout(() => {
        setHasNotification(false);
      }, 1000);
    });

    return unsubscribe;
  }, []);

  return (
    <Container>
      <StatusBar />
      <CongratsModal visible={getPercentage() === '100'} />
      <Section>
        <MotiView state={mlTextAnimation} transition={{duration: 200}}>
          <Title>{defaultMl * cups.length} ml</Title>
        </MotiView>
        <MotiView state={textAnimation} transition={{duration: 100, delay: 0}}>
          <Subtitle>{texts[activeText]}</Subtitle>
        </MotiView>
        <CupsContainer>
          {Array(quantity)
            .fill({})
            .map((_, index) => (
              <CupIcon key={index} full={index < cups.length} />
            ))}
        </CupsContainer>
      </Section>
      <Drop percentage={getPercentage()} />
      <Section row>
        <RemoveCupButton
          onPress={handleDeleteDrink}
          disabled={getPercentage() === '0'}>
          <UndoIcon />
        </RemoveCupButton>
        <AddCupButton
          onPress={handleAddDrink}
          disabled={getPercentage() === '100'}
          hasNotification={hasNotification}
        />
        <InvisibleView />
      </Section>
    </Container>
  );
};

export default Home;
