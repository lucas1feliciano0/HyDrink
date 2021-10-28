import styled, {DefaultTheme} from 'styled-components/native';
import {ThemedStyledProps} from 'styled-components';
import {MotiView} from 'moti';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon as IconVector, IconProps} from 'react-native-vector-icons/Icon';
import {RefAttributes} from 'react';

interface ICupIconProps
  extends ThemedStyledProps<
    IconProps & RefAttributes<IconVector>,
    DefaultTheme
  > {
  full?: boolean;
}

export const Container = styled(MotiView)``;

export const Icon = styled(MaterialCommunityIcon).attrs(
  (props: ICupIconProps) => ({
    name: props.full ? 'cup-water' : 'cup-outline',
    size: props.theme.fontSize.headline,
    color: props.theme.colors.secondary,
  }),
)<ICupIconProps>`
  margin: ${props => props.theme.padding.medium}px 0;
`;
