import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { SectionList, Text } from "react-native";

import LogoImage from "@assets/Logo.png";
import Profile from "@assets/Profile.png";
import { Button } from "@components/Button";

import {
  Container,
  Title,
  Head,
  ContainerLogo,
  ContainerProfile,
  Logo,
  Avatar,
  Summary,
  IconNavigate,
  Data,
  Percentage,
  Description,
  Icon,
  List,
  ContainerInfo,
  TitleList,
  ItemList,
  Hour,
  Separator,
  DescriptionItemList,
  Status,
} from "./styles";

export function Home() {
  const { colors } = useTheme();

  const navigation = useNavigation();

  type ItemListProps = {
    id: number;
    hour: string;
    description: string;
    status: boolean;
  };

  type ItemProps = {
    item: ItemListProps;
  };

  type DataListItemProps = {
    title: string;
    data: Array<ItemListProps>;
  };

  const DATA: DataListItemProps[] = [
    {
      title: "12.08.22",
      data: [
        {
          id: 1,
          hour: "16:00",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          description:
            "Pizza e quando seus olhos refletem o por do sol meu bem?",
          status: true,
        },
        {
          id: 2,
          hour: "20:00",
          description: "No buraco da bala, na lage é brinquedo",
          status: true,
        },
      ],
    },
    {
      title: "11.08.22",
      data: [
        {
          id: 1,
          hour: "16:00",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          description: "Japanese food Um dia so pra vadiar",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          description: "Coxinha se nunca vacilei, não é agora que vai ser",
          status: true,
        },
      ],
    },
    {
      title: "10.08.22",
      data: [
        {
          id: 1,
          hour: "16:00",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          description: "Pizza",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          description: "No buraco da bala, na lage é brinquedo",
          status: true,
        },
      ],
    },
    {
      title: "09.08.22",
      data: [
        {
          id: 1,
          hour: "16:00",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          description: "Pizza",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          description: "No buraco da bala, na lage é brinquedo",
          status: true,
        },
      ],
    },
    {
      title: "08.08.22",
      data: [
        {
          id: 1,
          hour: "16:00",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          description: "Pizza",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          description: "No buraco da bala, na lage é brinquedo",
          status: true,
        },
      ],
    },
  ];

  const VALUES = {
    percentage: 99.99,
    decriptionSummary: "das refeicões dentro da dieta",
    title: "Refeições",
  };

  const renderItem = ({ item }: ItemProps) => {
    return (
      <ItemList>
        <ContainerInfo>
          <Hour> {item.hour}</Hour>
          <Separator>|</Separator>
          <DescriptionItemList>{item.description}</DescriptionItemList>
        </ContainerInfo>
        <Status type={item.status} />
      </ItemList>
    );
  };

  const handleNavigateSummary = () => {
    navigation.navigate("summary", {
      values: VALUES,
    });
  };

  return (
    <Container>
      <Head>
        <ContainerLogo>
          <Logo source={LogoImage} />
        </ContainerLogo>
        <ContainerProfile>
          <Avatar source={Profile} />
        </ContainerProfile>
      </Head>
      <Summary onPress={handleNavigateSummary} type={VALUES.percentage > 50}>
        <IconNavigate>
          <Icon type={VALUES.percentage > 50} />
        </IconNavigate>
        <Data>
          <Percentage>{VALUES.percentage} %</Percentage>
          <Description>{VALUES.decriptionSummary}</Description>
        </Data>
      </Summary>

      <Title>{VALUES.title}</Title>

      <Button
        title=" Nova Refeição"
        onPress={() => {}}
        icon={<Plus size={22} color={colors.white} />}
      />

      <List>
        <SectionList
          sections={DATA}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <TitleList>{title}</TitleList>
          )}
          keyExtractor={(section) => section.id.toString()}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </List>
    </Container>
  );
}
