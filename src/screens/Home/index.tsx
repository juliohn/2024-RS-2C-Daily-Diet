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
import { calculate } from "src/helpers/calculate";

export function Home() {
  const { colors } = useTheme();

  const navigation = useNavigation();

  const [meals, setMeals] = useState<DataListItemProps[]>([]);
  const [percentage, setPercentege] = useState<number>(0);

  const VALUES = {
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
    navigation.navigate("summary");
  };

  const handleNavigateDetails = (item: ItemListProps) => {
    navigation.navigate("details", {
      item: item,
    });
  };

  const handleNavigateNew = () => {
    navigation.navigate("new");
  };

  const resetData = async () => {
    await reset();
    setPercentege(0);
  };

  async function fetchMeals() {
    try {
      const meals = await getAllMeals();
      setMeals(meals);

      const data = await calculate();
      setPercentege(data.percentage);
    } catch (error) {
      console.log("===", error);
    }
  }

  // - Carrega as refeicoes a cada vez que tiver foco na tela
  useFocusEffect(
    useCallback(() => {
      //resetData();
      fetchMeals();
    }, [])
  );

  const renderPercentageContainer = useMemo(
    () => (
      <Summary onPress={handleNavigateSummary} type={percentage > 50}>
        <IconNavigate>
          <Icon type={percentage > 50} />
        </IconNavigate>
        <Data>
          <Percentage>{percentage} %</Percentage>
          <Description>{VALUES.decriptionSummary}</Description>
        </Data>
      </Summary>
    ),
    [percentage]
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
