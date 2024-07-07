import styled, { css } from "styled-components/native";

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};

  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  height: 150px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid #000; */
`;
export const Box = styled.View`
  width: 48%;
`;

interface BoxSelectedTypes {
  isSelected: boolean;
  type: "POSITIVE" | "NEGATIVE";
}
export const BoxSelected = styled.TouchableOpacity<BoxSelectedTypes>`
  flex: 1;
  flex-direction: row;
  border-radius: 6px;
  min-height: 56px;
  max-height: 56px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "POSITIVE" ? theme.colors.green_300 : theme.colors.red_100};

  border-color: ${({ theme, isSelected, type }) =>
    isSelected && type === "POSITIVE"
      ? theme.colors.green_500
      : isSelected && type === "NEGATIVE"
      ? theme.colors.red_500
      : "transparent"};

  border-width: 0.5px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};
`;

interface StatusTypeStylesProps {
  type: boolean;
}

export const Status = styled.View<StatusTypeStylesProps>`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${({ theme, type }) =>
    type ? theme.colors.green_500 : theme.colors.red_500};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
  /* border: 1px solid #000000; */
`;
