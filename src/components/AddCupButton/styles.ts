import styled from 'styled-components/native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

export const Container = styled.Pressable`
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontistoIcon).attrs(props => ({
  name: 'blood-drop',
  size: props.theme.fontSize.headline,
  color: props.theme.colors.white,
}))<any>`
  position: absolute;
`;
