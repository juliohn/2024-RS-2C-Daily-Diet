import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: ${({ multiline, numberOfLines }) =>
    multiline ? numberOfLines! * 56 : "56"}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 16px;

  color: ${({ theme }) => theme.colors.gray_700};

  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md}px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.gray_400};
`;
