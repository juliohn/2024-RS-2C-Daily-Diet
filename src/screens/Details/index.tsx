import { useState, useMemo } from "react";

import { useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

import { Container } from "@components/Container";
import { ConfirmModal } from "@components/ConfirmModal";
import { HeaderActions } from "@components/HeaderActions";
import { Button } from "@components/Button";

import { useTheme } from "styled-components/native";

import { Plus, Trash } from "phosphor-react-native";

import { mealDelete } from "@storage/meals/actionsMeals";

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

  const [modalVisible, setModalVisible] = useState(false);

  const { item } = route.params as ItemProps;

  const { colors } = useTheme();

  const handleNavigateEdit = () => {
    navigation.navigate("edit", {
      item: item,
    });
  };

  const handleDelete = async () => {
    // - Delete item from storage
    await mealDelete(item);
    // -  modal to false
    setModalVisible(false);
    // - Navigate to home
    navigation.navigate("home");
  };

  const renderModalConfirmation = useMemo(
    () => (
      <ConfirmModal
        textConfirm={`Deseja realmente excluir o registro da refeição?`}
        visible={modalVisible}
        textButonCancel="Cancelar"
        textButtonConfirm="Sim, Excluir"
        callBackConfirm={handleDelete}
        callBackCancel={() => setModalVisible(false)}
      />
    ),
    [modalVisible]
  );

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
              onPress={() => setModalVisible(true)}
              icon={<Trash size={18} color={colors.gray_700} />}
            />
          </ButtonContainer>
        </>
      </Container>
      {modalVisible && renderModalConfirmation}
    </>
  );
}
