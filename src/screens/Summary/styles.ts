import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

  margin-top: -14px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const DataContainer = styled.View`
  height: 90px;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray_200};
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Count = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xg}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_600};
  `};
`;

export const DataDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_600};
  `};
`;

export const Resume = styled.View`
  flex-direction: row;
  height: 110px;
  width: 100%;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
`;
interface InfoTypeStylesProps {
  type: boolean;
}

export const Info = styled.View<InfoTypeStylesProps>`
  height: 110px;
  width: 48%;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type ? theme.colors.green_100 : theme.colors.red_100};
  align-items: center;
  justify-content: center;
`;
