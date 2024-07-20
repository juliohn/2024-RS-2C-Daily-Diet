import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { SectionList } from "react-native";

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
import { getAllMeals, reset } from "@storage/meals/mealCreate";
import { useCallback, useEffect, useState } from "react";

import { DataListItemProps } from "./types";

export function Home() {
  //reset();
  // - Carrega as refeicoes a cada vez que tiver foco na tela
  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );
  const { colors } = useTheme();

  const navigation = useNavigation();

  const [meals, setMeals] = useState<DataListItemProps[]>([]);

  async function fetchMeals() {
    try {
      //await reset();
      const meals = await getAllMeals();
      setMeals(meals);
      console.log("=== Home", meals);
    } catch (error) {
      console.log("===", error);
    }
  }

  const DATA: DataListItemProps[] = [
    {
      title: "12.08.22",
      data: [
        {
          id: "1",
          hour: "16:00",
          date: "12.08.22",
          title: "Burguer",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: "3",
          hour: "18:00",
          date: "12.08.22",
          title: "Pizza",
          description:
            "Pizza e quando seus olhos refletem o por do sol meu bem?",
          status: true,
        },
        {
          id: 2,
          hour: "20:00",
          date: "12.08.22",
          title: "Hot-Dog",
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
          date: "11.08.22",
          title: "Bean",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          date: "11.08.22",
          title: "Rice",
          description: "Japanese food Um dia so pra vadiar",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          date: "11.08.22",
          title: "Meat",
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
          date: "10.08.22",
          title: "Salad",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          date: "10.08.22",
          title: "Popcorn",
          description: "Pizza",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          date: "10.08.22",
          title: "Japanese Food",
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
          date: "09.08.22",
          title: "Fried pastry",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          date: "09.08.22",
          title: "Pasta",
          description: "Pizza",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          date: "09.08.22",
          title: "Eggs",
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
          date: "08.08.22",
          title: "Papaia",
          description:
            "Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce",
          status: false,
        },
        {
          id: 3,
          hour: "18:00",
          date: "08.08.22",
          title: "Apple",
          description: "Pizza",
          status: false,
        },
        {
          id: 2,
          hour: "20:00",
          date: "08.08.22",
          title: "Bananas",
          description: "No buraco da bala, na lage é brinquedo",
          status: true,
        },
      ],
    },
  ];

  const VALUES = {
    percentage: 88.99,
    decriptionSummary: "das refeicões dentro da dieta",
    title: "Refeições",
  };

  const renderItem = ({ item }: ItemProps) => {
    return (
      <ItemList onPress={() => handleNavigateDetails(item)}>
        <ContainerInfo>
          <Hour> {item.hour}</Hour>
          <Separator>|</Separator>
          <DescriptionItemList>{item.title}</DescriptionItemList>
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

  const handleNavigateDetails = (item: ItemListProps) => {
    navigation.navigate("details", {
      item: item,
    });
  };

  const handleNavigateNew = () => {
    navigation.navigate("new");
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
        onPress={handleNavigateNew}
        icon={<Plus size={22} color={colors.white} />}
      />

      <List>
        <SectionList
          sections={meals}
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
