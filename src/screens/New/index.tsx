import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import uuid from "react-native-uuid";

import { Container } from "@components/Container";

import { Input } from "@components/Input";

import DateTimePicker from "@react-native-community/datetimepicker";

import { HeaderActions } from "@components/HeaderActions";

import { Button } from "@components/Button";

import {
  Label,
  Row,
  Box,
  BoxSelected,
  Status,
  Title,
  ButtonContainer,
} from "./styles";
import { mealCreate } from "@storage/meals/actionsMeals";

export function New() {
  const navigation = useNavigation();

  const [isDietIn, setIsDietIn] = useState("POSITIVE");

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [date, setDate] = useState(new Date());

  const [time, setTime] = useState(new Date());

  const onChangeDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate!);
  };

  const onChangeTime = (selecteTime: Date | undefined) => {
    setTime(selecteTime!);
  };

  const handleRegisterMeal = async () => {
    const newMeal = {
      id: uuid.v4().toString(),
      hour: time.toLocaleTimeString(),
      date: date.toLocaleDateString(),
      title: name,
      description: description,
      status: isDietIn === "POSITIVE" ? true : false,
    };

    await mealCreate(newMeal);

    navigation.navigate("finish", {
      item: {
        isDietIn,
      },
    });
  };

  return (
    <>
      <HeaderActions title="Nova Refeição" type={"neutral"} />
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
            <Button title="Cadastrar refeição" onPress={handleRegisterMeal} />
          </ButtonContainer>
        </>
      </Container>
    </>
  );
}
