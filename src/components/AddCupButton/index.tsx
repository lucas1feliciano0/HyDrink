import React, {useContext} from 'react';
import Svg, {Circle} from 'react-native-svg';
import {ThemeContext} from 'styled-components/native';
import {useWindowDimensions} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

import {Container, Icon} from './styles';

interface IProps {
  onPress: () => void;
  disabled?: boolean;
}

const AddCupButton: React.FC<IProps> = ({onPress, disabled, ...rest}) => {
  const theme = useContext(ThemeContext);
  const {width} = useWindowDimensions();

  const strokeDefaultValue = width * 0.02;
  const strokeAnimatedValue = useSharedValue(0);

  const buttonAnimatedProps = useAnimatedProps(() => ({
    cx: width * 0.15,
    cy: width * 0.15,
    r: 40,
    fill: theme.colors.secondary,
    strokeWidth: interpolate(
      strokeAnimatedValue.value,
      [0, 0.5, 1],
      [strokeDefaultValue, width * 0.05, strokeDefaultValue],
    ),
    stroke: theme.colors.secondary_highlight,
    strokeOpacity: 0.5,
  }));

  function handlePress() {
    strokeAnimatedValue.value = 0;

    strokeAnimatedValue.value = withTiming(1, {
      duration: 600,
      easing: Easing.ease,
    });

    onPress();
  }

  return (
    <Container onPress={handlePress} disabled={disabled} {...rest}>
      <Svg width={theme.wp('30%')} height={theme.wp('30%')}>
        <AnimatedCircle animatedProps={buttonAnimatedProps} />
      </Svg>
      <Icon />
    </Container>
  );
};

export default AddCupButton;
