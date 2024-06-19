import styled, {css} from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { ButtonTypeStylesProps } from './types';

type Props = {
    type:ButtonTypeStylesProps;
}

export const Container  = styled(TouchableOpacity)<Props>`
  flex:1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;

  background-color:  ${({theme , type })=>
    type === 'PRIMARY' ? theme.colors.gray_700 : theme.colors.white
  };

  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ type })=> type === 'SECONDARY' && css`
        border-width: 0.5px ;
        border-style: solid;
        border-color: theme.colors.gray_700
   `};
`;

export const Title = styled.Text<Props>`
  ${({theme, type})=> css`
        font-size: ${ theme.font_size.sm}px;
        font-family: ${ theme.font_family.bold};
        color: ${ type === 'PRIMARY' ?  theme.colors.white : theme.colors.gray_700};
    `};
`;

export const ContainerIcon = styled.View`
    margin-right:10px
`;

