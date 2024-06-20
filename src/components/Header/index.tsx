import { useNavigation } from "@react-navigation/native";
import {
  Container,
  BackContainer,
  Icon,
  Data,
  Percentage,
  Description,
} from "./styles";

import { HeaderProps } from "./types";

export function Header({ values }: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container type={true}>
      <BackContainer onPress={handleGoBack}>
        <Icon type={true} />
      </BackContainer>
      <Data>
        <Percentage>{values.percentage}%</Percentage>
        <Description>{values.decriptionSummary}</Description>
      </Data>
    </Container>
  );
}
