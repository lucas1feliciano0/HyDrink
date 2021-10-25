import React, {useState} from 'react';
// import {useSharedValue, withTiming} from 'react-native-reanimated';
// import {ThemeContext} from 'styled-components/native';

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
} from './styles';

const Home: React.FC = () => {
  // const theme = useContext(ThemeContext);
  // const percentage = useSharedValue(0);
  const [percentage, setPercentage] = useState(0);

  function handleAddDrink() {
    console.log('adding cup');
    setPercentage(percentage + 10);
    // percentage.value = withTiming(percentage.value + 10, {
    //   duration: 1000,
    // });
  }

  function handleDeleteDrink() {
    console.log('removing cup');
    setPercentage(percentage - 10);
    // percentage.value = withTiming(percentage.value + 10, {
    //   duration: 1000,
    // });
  }

  return (
    <Container>
      <StatusBar />
      <Section>
        <Title>1,401 ml</Title>
        <Subtitle>
          beber água diariamente é fundamental para o bom funcionamento do nosso
          organismo.
        </Subtitle>
      </Section>
      <Drop percentage={percentage} />
      <Section row>
        <RemoveCupButton
          onPress={handleDeleteDrink}
          disabled={percentage === 0}>
          <UndoIcon />
        </RemoveCupButton>
        <AddCupButton onPress={handleAddDrink} disabled={percentage === 100} />
        <InvisibleView />
      </Section>
    </Container>
  );
};

export default Home;
