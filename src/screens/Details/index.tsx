import { useRoute } from "@react-navigation/native";

import { Container } from "@components/Container";

import {
  Title,
  Description,
  Subtitle,
  DateHour,
  BadgeStatus,
  Status,
  StatusDescription,
} from "./styles";

import { HeaderActions } from "@components/HeaderActions";

type ItemDetailsProps = {
  item: {
    id: number;
    hour: string;
    date: string;
    title: string;
    description: string;
    status: boolean;
  };
};

export function Details() {
  const route = useRoute();

  const { item } = route.params as ItemDetailsProps;

  console.log("===", item);

  return (
    <>
      <HeaderActions title="Refeição" type={item.status} />
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
        </>
      </Container>
    </>
  );
}
