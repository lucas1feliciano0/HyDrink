import React, {useEffect} from 'react';
import {useAnimationState} from '@motify/core';

import {Container, Icon} from './styles';

interface IProps {
  full?: boolean;
}

const useJump = () => {
  return useAnimationState({
    from: {
      translateY: 0,
    },
    to: {
      translateY: -30,
    },
  });
};

const CupIcon: React.FC<IProps> = ({full}) => {
  const animation = useJump();

  useEffect(() => {
    animation.transitionTo(() => 'to');

    setTimeout(() => {
      animation.transitionTo(() => 'from');
    }, 20);
  }, [full, animation]);

  return (
    <Container state={animation}>
      <Icon full={full} />
    </Container>
  );
};

export default CupIcon;
