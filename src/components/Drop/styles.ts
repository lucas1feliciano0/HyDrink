import styled from 'styled-components/native';
import Svg from 'react-native-svg';
import Animated from 'react-native-reanimated';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export const Container = styled(AnimatedSvg)`
  overflow: hidden;
`;
