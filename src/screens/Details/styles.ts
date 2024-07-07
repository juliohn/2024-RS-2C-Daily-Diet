import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};

  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_600};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};

  margin-top: 10px;
  margin-bottom: 5px;
`;

export const DateHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_700};
  `};
  margin-bottom: 16px;
`;

export const BadgeStatus = styled.View`
  flex-direction: row;
  height: 34px;
  width: 134px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  align-items: center;
  justify-content: center;
`;

interface StatusProps {
  type: boolean;
}
export const Status = styled.View<StatusProps>`
  height: 8px;
  width: 8px;
  border-radius: 6px;
  margin-right: 8px;

  background-color: ${({ theme, type }) =>
    type ? theme.colors.green_500 : theme.colors.red_500};
`;

export const StatusDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_700};
  `};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;
