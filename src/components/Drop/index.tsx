import React, {useContext} from 'react';
import {Text, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {ThemeContext} from 'styled-components/native';

import {Container} from './styles';

const Drop: React.FC = () => {
  const theme = useContext(ThemeContext);
  const percentage = 44;

  return (
    <Container
      viewBox={`${theme.wp('18%')} ${theme.hp('8%')} ${theme.wp(
        '50%',
      )} ${theme.hp('60%')}`}
      width={theme.wp('50%')}
      height={theme.hp('45%')}>
      <Defs>
        <LinearGradient id="test" gradientTransform="rotate(90)">
          <Stop offset="33.666%" stopColor={theme.colors.background.primary} />
          <Stop offset="55.666%" stopColor={theme.colors.background.primary} />
          <Stop offset="55.666%" stopColor={theme.colors.secondary} />
          <Stop offset="100%" stopColor={theme.colors.secondary} />
        </LinearGradient>
      </Defs>
      <Path
        d="M203.728 106.754c-94.51 79.78-169.647 215.053-92.618 310.613 56.39 52.526 141.388 41.451 173.034-26.534 57.44-125.704-109.563-162.704-80.412-284.08z"
        stroke={theme.colors.secondary}
        fill="url(#test)"
        strokeWidth={8}
      />

      <Text
        x={theme.wp('45%')}
        y={theme.hp('45%')}
        fill={theme.colors.white}
        fontFamily="Lemon-Regular"
        fontSize={theme.fontSize.headline2}
        textAnchor="middle">
        55%
      </Text>
    </Container>
  );
};

export default Drop;
