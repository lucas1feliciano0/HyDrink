import React from 'react';

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
  onClose: () => void;
}

const CongratsModal: React.FC<IProps> = ({visible, onClose}) => {
  function handlePress() {
    onClose();
  }

  return (
    <Modal visible={visible}>
      <Backdrop>
        <Container>
          <Title>Parabéns!</Title>
          <Subtitle>
            Você completou seu desafio diário de beber 2L de água!
          </Subtitle>
          <Button onPress={handlePress}>
            <ButtonText>Fechar</ButtonText>
          </Button>
        </Container>
      </Backdrop>
    </Modal>
  );
};

export default CongratsModal;
