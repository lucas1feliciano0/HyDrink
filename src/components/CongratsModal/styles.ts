import styled from 'styled-components/native';

export const Modal = styled.Modal.attrs({
  transparent: true,
  animationType: 'slide',
  statusBarTranslucent: true,
})``;

export const Backdrop = styled.View`
  flex: 1;
  background-color: #000000af;
  justify-content: flex-end;
`;

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background.primary};
  width: 100%;
  align-items: center;
  padding: ${props => props.theme.padding.big}px 10px;
  border-top-left-radius: ${props => props.theme.borderRadius.big}px;
  border-top-right-radius: ${props => props.theme.borderRadius.big}px;
`;

export const Title = styled.Text`
  font-family: 'Lemon-Medium';
  font-size: ${props => props.theme.fontSize.large}px;
  color: ${props => props.theme.colors.primary};
`;

export const Subtitle = styled.Text`
  font-family: 'Lemon-Regular';
  font-size: ${props => props.theme.fontSize.small}px;
  color: ${props => props.theme.colors.texts.secondary};
  text-align: center;
  margin: ${props => props.theme.padding.big}px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.secondary_highlight};
  width: 90%;
  border-radius: ${props => props.theme.borderRadius.big}px;
  padding: ${props => props.theme.padding.medium}px 0;
`;

export const ButtonText = styled(Subtitle)`
  font-size: ${props => props.theme.fontSize.medium}px;
  color: ${props => props.theme.colors.white};
  margin: ${props => props.theme.padding.small}px 0;
`;
