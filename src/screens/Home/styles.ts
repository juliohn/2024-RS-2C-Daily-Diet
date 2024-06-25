import styled, { css } from "styled-components/native";

import { Platform } from "react-native";

import { ArrowUpRight } from "phosphor-react-native";

const paddingDefault = Platform.OS === "ios" ? "70px 24px 24px" : "40px 24px";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${paddingDefault};
`;

export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ContainerLogo = styled.View`
  height: 40px;
  width: 80px;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 80px;
`;

export const ContainerProfile = styled.View`
  height: 40px;
  width: 80px;
  justify-content: center;
  align-items: flex-end;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
`;

// ---------- \\

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_600};
  `};

  margin-bottom: 10px;
`;

interface SummaryTypeStylesProps {
  type: boolean;
}
export const Summary = styled.TouchableOpacity<SummaryTypeStylesProps>`
  width: "100%";
  border-radius: 10;

  justify-content: center;
  background-color: ${({ theme, type }) =>
    type ? theme.colors.green_100 : theme.colors.red_100};

  margin-bottom: 30px;
`;

export const IconNavigate = styled.View`
  height: 24px;
  width: "100%";
  flex-direction: row;
  justify-content: flex-end;
`;

export const Data = styled.View`
  height: 80px;
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

type IconTypeStylesProps = {
  type: boolean;
};
export const Icon = styled(ArrowUpRight).attrs<IconTypeStylesProps>(
  ({ type, theme }) => ({
    size: 28,
    color: type ? theme.colors.green_500 : theme.colors.red_500,
  })
)`
  margin-top: 10px;
  margin-right: 10px;
`;

// ----------- \\

export const List = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const TitleList = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};

  margin-bottom: 8px;
  margin-top: 8px;
`;

export const ItemList = styled.TouchableOpacity`
  flex-direction: row;
  height: 46px;
  width: "100%";

  padding: 0 15px 0 15px;

  align-items: center;
  justify-content: space-between;

  border: 0.5px solid #000;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray_400};

  margin-bottom: 5px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `};
`;

export const Separator = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_400};
  `};
  margin-left: 8px;
  margin-right: 8px;
`;

export const DescriptionItemList = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_600};
  `};

  max-width: 200px;
`;

interface StatusTypeStylesProps {
  type: boolean;
}

export const Status = styled.View<StatusTypeStylesProps>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({ theme, type }) =>
    type ? theme.colors.green_300 : theme.colors.red_300};
`;
