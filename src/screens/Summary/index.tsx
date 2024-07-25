import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Container } from "@components/Container";

import {
  Title,
  DataContainer,
  Count,
  DataDescription,
  Resume,
  Info,
} from "./styles";

import { HeaderProps } from "@components/Header/types";

export function Summary() {
  const route = useRoute();

  const { values } = route.params as HeaderProps;

  return (
    <>
      <Header values={values} />
      <Container align="center">
        <>
          <Title>Estatísticas Gerais</Title>
          <DataContainer>
            <Count>22</Count>
            <DataDescription>
              melhor sequência de pratos dentro da dieta
            </DataDescription>
          </DataContainer>
          <DataContainer>
            <Count>{values.mealsTotal}</Count>
            <DataDescription>refeições registradas</DataDescription>
          </DataContainer>

          <Resume>
            <Info type>
              <Count>{values.mealIn}</Count>
              <DataDescription>refeições dentro da dieta</DataDescription>
            </Info>
            <Info type={false}>
              <Count>{values.mealOut}</Count>
              <DataDescription>
                <DataDescription>refeições fora da dieta</DataDescription>
              </DataDescription>
            </Info>
          </Resume>
        </>
      </Container>
    </>
  );
}
