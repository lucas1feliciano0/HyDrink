import React from 'react';
// import {ThemeContext} from 'styled-components/native';

import {
  AddCupButton,
  Container,
  Drop,
  Section,
  StatusBar,
  Subtitle,
  Title,
} from './styles';

const Home: React.FC = () => {
  // const theme = useContext(ThemeContext);

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
      <Drop />
      <Section>
        <AddCupButton onPress={() => console.log('Oii')} />
      </Section>
    </Container>
  );
};

export default Home;
