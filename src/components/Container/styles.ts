import styled from "styled-components/native";
interface AlignProps {
  align?: string;
}

export const ContainerMaster = styled.SafeAreaView`
  flex: 1;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

  margin-top: -36px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View<AlignProps>`
  flex: 1;
  align-items: ${({ align }) => align};
  padding-left: 24px;
  padding-right: 24px;
`;
