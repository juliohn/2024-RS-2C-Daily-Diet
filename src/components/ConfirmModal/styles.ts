import styled, { css } from "styled-components/native";

export const BoxContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
})`
  height: 200px;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`;

export const TextConfirm = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.lg}px;
  `};
  padding-left: 60px;
  padding-right: 60px;
`;

export const BoxAction = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const BoxButton = styled.View`
  height: 100px;
  width: 48%;
  justify-content: center;
  margin-top: 10px;
`;
