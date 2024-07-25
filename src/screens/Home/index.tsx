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
import { getAllMeals, reset } from "@storage/meals/actionsMeals";
import { useCallback, useMemo, useState } from "react";

import { DataListItemProps, ItemListProps, ItemProps } from "./types";

export function Home() {
  const { colors } = useTheme();

  const navigation = useNavigation();

  const [meals, setMeals] = useState<DataListItemProps[]>([]);
  const [mealIn, setMealIn] = useState<number>(0);
  const [mealOut, setMealOut] = useState<number>(0);
  const [percentage, setPercentege] = useState<number>(0);

  const calculate = useCallback(
    (dataMeals: DataListItemProps[]) => {
      if (dataMeals.length === 0) {
        setPercentege(0);
        setMealOut(0);
        setMealIn(0);
        return;
      }

      const countDietIn = dataMeals
        .map(({ data }) => {
          const filters = data.filter((item) => item.status === true);

          return filters.length;
        })
        .reduce((a, b) => a + b, 0);

      setMealIn(countDietIn);

      const countDietOut = dataMeals
        .map(({ data }) => {
          const filters = data.filter((item) => item.status === false);

          return filters.length;
        })
        .reduce((a, b) => a + b, 0);

      setMealOut(countDietOut);

      const currentPercentage =
        (countDietIn / (countDietIn + countDietOut)) * 100;

      setPercentege(currentPercentage);
    },
    [meals]
  );

  const VALUES = {
    percentage: ((mealIn / (mealIn + mealOut)) * 100).toFixed(2),
    decriptionSummary: "das refeicões dentro da dieta",
    title: "Refeições",
    mealIn,
    mealOut,
    mealsTotal: mealIn + mealOut,
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

  const renderPercentageContainer = useMemo(
    () => (
      <Summary onPress={handleNavigateSummary} type={percentage > 50}>
        <IconNavigate>
          <Icon type={percentage > 50} />
        </IconNavigate>
        <Data>
          <Percentage>{percentage.toFixed(2)} %</Percentage>
          <Description>{VALUES.decriptionSummary}</Description>
        </Data>
      </Summary>
    ),
    [percentage]
  );

  async function fetchMeals() {
    try {
      //await reset();
      const meals = await getAllMeals();

      setMeals(meals);

      calculate(meals);
    } catch (error) {
      console.log("===", error);
    }
  }

  // - Carrega as refeicoes a cada vez que tiver foco na tela
  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );
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

      {renderPercentageContainer}

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
