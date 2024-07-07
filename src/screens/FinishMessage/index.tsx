import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import {
  Container,
  Title,
  Message,
  ImageFinish,
  ButtonContainer,
  MainMessage,
  ContainerMessage,
} from "./styles";

type ItemFinishProps = {
  item: {
    isDietIn: string;
  };
};

import FeedbackPositive from "@assets/Feedbackpositive.png";
import FeedbackNegative from "@assets/Feedbacknegative.png";

export function FinishMessage() {
  const navigation = useNavigation();

  const route = useRoute();

  const { item } = route.params as ItemFinishProps;

  const { isDietIn } = item;

  const handleNavigateHome = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <Title type={isDietIn}>
        {isDietIn === "POSITIVE" ? "Continue assim! " : "Que pena "}
      </Title>
      <ContainerMessage>
        <Message>
          <Message>
            {isDietIn === "POSITIVE" ? "Você continua " : "Você "}
          </Message>
          <MainMessage>
            {isDietIn === "POSITIVE" ? "dentro da dieta. " : "saiu da dienta "}
          </MainMessage>
          <Message>
            {isDietIn === "POSITIVE"
              ? "Muito bem! "
              : "dessa vez, mas continue se esforçando e não desista!. "}
          </Message>
        </Message>
      </ContainerMessage>

      <ImageFinish
        source={isDietIn === "POSITIVE" ? FeedbackPositive : FeedbackNegative}
      />
      <ButtonContainer>
        <Button
          onPress={handleNavigateHome}
          title="Ir para pagina inicial"
        ></Button>
      </ButtonContainer>
    </Container>
  );
}
