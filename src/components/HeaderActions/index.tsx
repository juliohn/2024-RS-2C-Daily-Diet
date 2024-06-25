import { useNavigation } from "@react-navigation/native";
import { Container, BackContainer, Icon, Title, ElementFinal } from "./styles";

import { HeaderActionsProps } from "./types";

export function HeaderActions({ title, type = true }: HeaderActionsProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container type={type}>
      <BackContainer onPress={handleGoBack}>
        <Icon />
      </BackContainer>
      <Title>{title}</Title>
      <ElementFinal />
    </Container>
  );
}
