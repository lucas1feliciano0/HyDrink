import React, {useContext} from 'react';
import {Text, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {ThemeContext} from 'styled-components/native';

import {Container} from './styles';

interface IProps {
  percentage: number;
}

const Drop: React.FC<IProps> = ({percentage = 0}) => {
  const theme = useContext(ThemeContext);

  return (
    <Container
      viewBox={`${theme.wp('18%')} ${theme.hp('8%')} ${theme.wp(
        '50%',
      )} ${theme.hp('60%')}`}
      width={theme.wp('50%')}
      height={theme.hp('45%')}>
      <Defs>
        <LinearGradient id="test" y2="0%" x2="0%" y1="100%" x1="0%">
          <Stop
            offset={`${percentage}%`}
            stopColor={theme.colors.secondary}
            stopOpacity="1"
          />
          <Stop
            offset={`${percentage}%`}
            stopColor={theme.colors.secondary}
            stopOpacity="0"
          />
          <Stop
            offset="100%"
            stopColor={theme.colors.secondary}
            stopOpacity="0"
          />
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
        fontFamily="Lemon-Regular"
        fill={percentage < 50 ? theme.colors.primary : theme.colors.white}
        fontSize={theme.fontSize.headline2}
        textAnchor="middle">
        {`${percentage}%`}
      </Text>
    </Container>
  );
};

export default Drop;
