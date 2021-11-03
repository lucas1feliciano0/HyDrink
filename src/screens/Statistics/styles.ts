import styled from 'styled-components/native';
import {ScrollViewProps} from 'react-native';

import SvgIllustration from '@assets/svg/404.svg';

import DayStatisticsCardComponent from '@components/DayStatisticsCard';
import DateSelectorComponent from '@components/DateSelector';

export const Container = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: props.theme.padding.small,
  },
  showsVerticalScrollIndicator: false,
}))<ScrollViewProps>`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.background.primary};
  padding: 0 ${props => props.theme.padding.medium}px;
`;

export const DayStatisticsCard = styled(DayStatisticsCardComponent)`
  margin-bottom: ${props => props.theme.padding.large}px;
`;

export const DateSelector = styled(DateSelectorComponent)`
  margin-bottom: ${props => props.theme.hp('3%')}px;
`;

export const NoRegisterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IllustrationContainer = styled.View``;

export const Illustration = SvgIllustration;

export const Subtitle = styled.Text`
  font-family: 'Lemon-Regular';
  font-size: ${props => props.theme.fontSize.medium}px;
  color: ${props => props.theme.colors.texts.secondary};
  text-align: center;
  margin: ${props => props.theme.hp('5%')}px 0;
`;

export const StatusBar = styled.StatusBar.attrs(props => ({
  backgroundColor: props.theme.colors.background.primary,
  barStyle: 'dark-content',
}))``;
