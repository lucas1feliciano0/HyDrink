import styled from 'styled-components/native';

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

export const Section = styled.View`
  align-items: center;
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

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.background.primary,
  barStyle: 'dark-content',
}))``;
