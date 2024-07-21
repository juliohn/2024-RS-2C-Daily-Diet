import { useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

import { Container } from "@components/Container";

import { useTheme } from "styled-components/native";

import { HeaderActions } from "@components/HeaderActions";
import { Button } from "@components/Button";
import { Plus, Trash } from "phosphor-react-native";

import {
  Title,
  Description,
  Subtitle,
  DateHour,
  BadgeStatus,
  Status,
  StatusDescription,
  ButtonContainer,
} from "./styles";

import { ItemProps } from "@screens/Home/types";

export function Details() {
  const route = useRoute();

  const navigation = useNavigation();

  const { item } = route.params as ItemProps;

  const { colors } = useTheme();

  const handleNavigateEdit = () => {
    navigation.navigate("edit", {
      item: item,
    });
  };

  return (
    <>
      <HeaderActions title="Refeição" type={item.status ? "true" : "false"} />
      <Container align="flex-start">
        <>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Subtitle>Data e Hora</Subtitle>
          <DateHour>
            {item.date} às {item.hour}
          </DateHour>

          <BadgeStatus>
            <Status type={item.status} />
            <StatusDescription>
              {item.status ? "dentro da dieta" : "fora da dieta"}{" "}
            </StatusDescription>
          </BadgeStatus>

          <ButtonContainer>
            <Button
              title="Editar refeição"
              onPress={handleNavigateEdit}
              icon={<Plus size={18} color={colors.white} />}
            />

            <Button
              type="SECONDARY"
              title="Excluir refeição"
              onPress={() => {}}
              icon={<Trash size={18} color={colors.gray_700} />}
            />
          </ButtonContainer>
        </>
      </Container>
    </>
  );
}
