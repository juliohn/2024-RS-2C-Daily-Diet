import { useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import uuid from "react-native-uuid";

import { Container } from "@components/Container";

import { Input } from "@components/Input";

import DateTimePicker from "@react-native-community/datetimepicker";

import { HeaderActions } from "@components/HeaderActions";

import { Button } from "@components/Button";

import { ItemProps } from "@screens/Home/types";

import {
  Label,
  Row,
  Box,
  BoxSelected,
  Status,
  Title,
  ButtonContainer,
} from "./styles";

import { mealUpdate } from "@storage/meals/actionsMeals";

export function Edit() {
  const route = useRoute();

  const navigation = useNavigation();

  const { item } = route.params as ItemProps;

  const [isDietIn, setIsDietIn] = useState(
    item.status ? "POSITIVE" : "NEGATIVE"
  );

  const [name, setName] = useState(item.title);

  const [description, setDescription] = useState(item.description);

  let [day, month, year] = item.date.split("/");

  let [hours, minutes, seconds] = item.hour.split(":");

  const editDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes),
    Number(seconds)
  );

  const [date, setDate] = useState(editDate);

  const [time, setTime] = useState(editDate);

  const onChangeDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate!);
  };

  const onChangeTime = (selecteTime: Date | undefined) => {
    setTime(selecteTime!);
  };

  const handleRegisterMeal = async () => {
    const editMeal = {
      id: item.id,
      hour: time.toLocaleTimeString(),
      date: date.toLocaleDateString(),
      title: name,
      description: description,
      status: isDietIn === "POSITIVE" ? true : false,
    };

    await mealUpdate(editMeal);

    navigation.navigate("finish", {
      item: {
        isDietIn,
      },
    });
  };

  return (
    <>
      <HeaderActions title="Editar Refeição" type={"neutral"} />
      <Container align="flex-start">
        <>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={(name) => {
              setName(name);
            }}
          />
          <Label>Descrição</Label>
          <Input
            value={description}
            onChangeText={(description) => {
              setDescription(description);
            }}
            multiline={true}
            numberOfLines={2}
          />
          <Row>
            <Box>
              <Label>Data</Label>
              <Input readOnly value={date.toLocaleDateString()} />

              <DateTimePicker
                style={{ marginTop: 5 }}
                value={date}
                onChange={(_, date) => onChangeDate(date)}
              />
            </Box>
            <Box>
              <Label>Hora</Label>
              <Input readOnly value={time.toLocaleTimeString()} />
              <DateTimePicker
                style={{ marginTop: 5 }}
                mode="time"
                value={time}
                onChange={(_, date) => onChangeTime(date)}
              />
            </Box>
          </Row>

          <Label>Esta dentro da dieta?</Label>

          <Row>
            <Box>
              <BoxSelected
                onPress={() => setIsDietIn("POSITIVE")}
                isSelected={isDietIn === "POSITIVE"}
                type={"POSITIVE"}
              >
                <Status type={true} />

                <Title>Sim</Title>
              </BoxSelected>
            </Box>
            <Box>
              <BoxSelected
                onPress={() => setIsDietIn("NEGATIVE")}
                isSelected={isDietIn === "NEGATIVE"}
                type={"NEGATIVE"}
              >
                <Status type={false} />

                <Title>Não</Title>
              </BoxSelected>
            </Box>
          </Row>

          <ButtonContainer>
            <Button title="Salvar alterações" onPress={handleRegisterMeal} />
          </ButtonContainer>
        </>
      </Container>
    </>
  );
}
