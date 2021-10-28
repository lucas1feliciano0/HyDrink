import React from 'react';
import {BackHandler} from 'react-native';

import {
  Backdrop,
  Button,
  ButtonText,
  Container,
  Modal,
  Subtitle,
  Title,
} from './styles';

interface IProps {
  visible: boolean;
}

const CongratsModal: React.FC<IProps> = ({visible}) => {
  function handlePress() {
    BackHandler.exitApp();
  }

  return (
    <Modal visible={visible}>
      <Backdrop>
        <Container>
          <Title>Parabéns!</Title>
          <Subtitle>
            Você completou seu desafio diário de beber 2L de água! Volte aqui
            amanhã para mais.
          </Subtitle>
          <Button onPress={handlePress}>
            <ButtonText>Sair</ButtonText>
          </Button>
        </Container>
      </Backdrop>
    </Modal>
  );
};

export default CongratsModal;
