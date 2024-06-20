import styled, { css } from "styled-components/native";

import { Platform } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

const paddingDefault = Platform.OS === "ios" ? "60px 16px" : "10px 8px";

interface HeaderTypeStylesProps {
  type: boolean;
}

export const Container = styled.View<HeaderTypeStylesProps>`
  height: 200px;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type ? theme.colors.green_100 : theme.colors.red_100};

  padding: ${paddingDefault};
  /* border: 1px solid #000; */
`;

export const BackContainer = styled.TouchableOpacity`
  width: 40px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #000; */
`;

type IconTypeStylesProps = {
  type: boolean;
};
export const Icon = styled(ArrowLeft).attrs<IconTypeStylesProps>(
  ({ type, theme }) => ({
    size: 28,
    color: type ? theme.colors.green_500 : theme.colors.red_500,
  })
)``;

export const Data = styled.View`
  width: "100%";
  justify-content: center;
  align-items: center;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xg}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_500};
  `};
`;
