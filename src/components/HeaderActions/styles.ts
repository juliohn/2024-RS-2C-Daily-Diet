import styled, { css } from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

interface HeaderTypeStylesProps {
  type: string;
}

export const Container = styled.View<HeaderTypeStylesProps>`
  height: 150px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "true"
      ? theme.colors.green_100
      : type === "false"
      ? theme.colors.red_100
      : theme.colors.gray_300};
`;

export const BackContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_700,
}))``;

export const Title = styled.Text`
  flex: 4;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};
`;

export const ElementFinal = styled.View`
  flex: 1;
`;
