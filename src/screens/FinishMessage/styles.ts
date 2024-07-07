import styled, { css } from "styled-components/native";

type ItemTypeProps = {
  type: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 32px;
  padding-right: 32px;

  align-items: center;
  justify-content: center;

  /* border: 1px solid #000; */
`;

export const Title = styled.Text<ItemTypeProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.font_size.xg}px;
    font-family: ${theme.font_family.bold};
    color: ${type === "POSITIVE"
      ? theme.colors.green_500
      : theme.colors.red_500};
  `};
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_700};
  `};

  text-align: center;
  margin-top: 10px;

  /* border: 1px solid #000; */
`;

export const MainMessage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};
`;

export const ContainerMessage = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: center;

  /* border: 1px solid #000; */
`;

export const ImageFinish = styled.Image`
  resize-mode: "cover";
  height: 288px;
  width: 244px;
`;

export const ButtonContainer = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: flex-end;

  /* width: 100%; */

  padding-left: 64px;
  padding-right: 64px;
  /* border: 1px solid #000; */
  //
`;
