import styled from 'styled-components/native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import DropComponent from '@components/Drop';
import AddCupButtonComponent from '@components/AddCupButton';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background.primary};
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.padding.large}px;
  padding-bottom: ${props => props.theme.hp('10%')}px;
`;

export const Section = styled.View<{row?: boolean}>`
  align-items: center;
  ${props => props.row && 'flex-direction: row; justify-content: center'};
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Lemon-Medium';
  font-size: ${props => props.theme.fontSize.headline}px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.padding.medium}px;
`;

export const Subtitle = styled.Text`
  font-family: 'Lemon-Regular';
  font-size: ${props => props.theme.fontSize.small}px;
  color: ${props => props.theme.colors.texts.secondary};
  text-align: center;
`;

export const Drop = styled(DropComponent)``;

export const AddCupButton = styled(AddCupButtonComponent)``;

export const RemoveCupButton = styled.TouchableOpacity``;

export const UndoIcon = styled(FontistoIcon).attrs(props => ({
  name: 'undo',
  size: props.theme.fontSize.headline,
  color: props.theme.colors.primary,
}))<any>``;

export const InvisibleView = styled.View`
  width: ${props => props.theme.fontSize.headline}px;
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.background.primary,
  barStyle: 'dark-content',
}))``;
