import styled from 'styled-components/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import WavesBackground from '@assets/images/waves.png';

export const Container = styled.ImageBackground.attrs(props => ({
  source: WavesBackground,
  imageStyle: {
    overflow: 'hidden',
    borderRadius: props.theme.borderRadius.big,
    opacity: 0.8,
  },
}))`
  flex-direction: row;
  align-items: center;
  width: 95%;
  padding: ${props => props.theme.padding.big}px;
  border-radius: ${props => props.theme.borderRadius.big}px;
  background-color: ${props => props.theme.colors.background.secondary};
  elevation: 10;
  shadow-color: ${props => props.theme.colors.shadow};
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: ${props => props.theme.padding.medium}px;
  bottom: ${props => props.theme.hp('4%')}px;
  transform: rotate(5deg);
`;

export const InfoSection = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-family: 'Lemon-Regular';
  font-size: ${props => props.theme.fontSize.medium}px;
  color: ${props => props.theme.colors.white};
  text-align: right;
  margin-bottom: ${props => props.theme.padding.small}px;
`;

export const Title = styled.Text`
  font-family: 'Lemon-Bold';
  font-size: ${props => props.theme.fontSize.headline}px;
  color: ${props => props.theme.colors.primary};
  text-align: right;
`;

export const Icon = styled(MaterialCommunityIcon).attrs(props => ({
  name: 'cup-water',
  size: props.theme.fontSize.headline,
  color: props.theme.colors.primary,
}))``;
