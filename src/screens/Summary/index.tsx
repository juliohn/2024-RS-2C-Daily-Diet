import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

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

import { calculate } from "src/helpers/calculate";
import { useCallback, useState } from "react";

export function Summary() {
  const route = useRoute();

  interface SummaryProps {
    percentage: number;
    mealDietIn: number;
    mealDietOut: number;
    mealsTotal: number;
  }
  const [data, setData] = useState<SummaryProps>({
    percentage: 0,
    mealDietIn: 0,
    mealDietOut: 0,
    mealsTotal: 0,
  });

  const fetchData = async () => {
    const results = await calculate();
    setData(results);
  };
  // - Carrega as refeicoes a cada vez que tiver foco na tela
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <>
      <Header values={{ percentage: data.percentage }} />
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
            <Count>{data.mealsTotal}</Count>
            <DataDescription>refeições registradas</DataDescription>
          </DataContainer>

          <Resume>
            <Info type>
              <Count>{data.mealDietIn}</Count>
              <DataDescription>refeições dentro da dieta</DataDescription>
            </Info>
            <Info type={false}>
              <Count>{data.mealDietOut}</Count>
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
