import styled from 'styled-components/native';
import AntIcons from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 50%;
`;

export const Touchable = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.small}px;
`;

export const Label = styled.Text`
  font-family: 'Lemon-Regular';
  font-size: ${props => props.theme.fontSize.large}px;
  color: ${props => props.theme.colors.texts.primary};
  text-align: center;
  flex: 1;
`;

export const Icon = styled(AntIcons).attrs(props => ({
  color: props.theme.colors.texts.primary,
  size: props.theme.fontSize.large,
}))``;
