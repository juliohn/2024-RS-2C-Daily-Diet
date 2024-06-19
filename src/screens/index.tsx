

import { Plus } from "phosphor-react-native";
import { useTheme } from 'styled-components/native';

import  LogoImage  from '@assets/Logo.png';
import  Profile  from '@assets/Profile.png';
import { Button } from '@components/Button';

import { Container,
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
 } from './styles';



export default function Home() {
  const { colors } = useTheme();

  type ItemListProps = {
    hour:string,
    description:string,
    status:boolean
}

  type ItemProps = {
    item:ItemListProps;
  }

 
  type DataListItemProps = {
    id:number,
    title:string,
    data:ItemListProps[]
  }
  

  const DATA:DataListItemProps[] = [
    {
      id:1,
      title: '12.08.22',
      data: [
              {
                hour:'16:00',
                description:'Burger Longe de vc eu preciso de algo mais, eu vivo na espera de poder viver a vida com voce',
                status: false
              },
              {
                hour:'18:00',
                description:'Pizza',
                status: false
              },
              {
                hour:'20:00',
                description:'No buraco da bala, na lage é brinquedo',
                status: true
              }],
    },
    {
      id:2,
      title: '11.08.22',
      data: [
              {
                hour:'16:00',
                description:'Burger',
                status: false
              },
              {
                hour:'17:00',
                description:'Pizza',
                status: false
              },
              {
                hour:'18:00',
                description:'Risotto',
                status: true
              }],
    },
    {
      id:3,
      title: '10.08.22',
      data: [
              {
                hour:'16:00',
                description:'Burger',
                status: false
              },
              {
                hour:'16:00',
                description:'Pizza',
                status: false
              },
              {
                hour:'16:00',
                description:'Risotto',
                status: true
              }],
    },
    {
      id:4,
      title: '09.08.22',
      data: [
              {
                hour:'16:00',
                description:'Burger',
                status: false
              },
              {
                hour:'17:00',
                description:'Pizza',
                status: false
              },
              {
                hour:'18:00',
                description:'Risotto',
                status: true
              }],
    },
  ];

  const VALUES = {
    percentage: 51,
    decriptionSumary: 'das refeicões dentro da dieta',
    title:'Refeições'
  }

  const renderItem = ({item} : ItemProps) => {
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
  }

  return (
    <Container>
      <Head>
          <ContainerLogo>
              <Logo source={LogoImage}/>
          </ContainerLogo>
          <ContainerProfile>
              <Avatar source={Profile}/>
            </ContainerProfile>
      </Head>
      <Summary type={VALUES.percentage > 50}>
          <IconNavigate>
            <Icon />
          </IconNavigate>
          <Data>
            <Percentage>{VALUES.percentage} %</Percentage>
            <Description>
              {VALUES.decriptionSumary}
            </Description>
          </Data>
      </Summary>

      <Title>
        {VALUES.title}
      </Title>

      <Button 
          title=" Nova Refeição"
          onPress={()=>{}}
          icon={<Plus size={22} color={colors.white}/>}
      />


{/* DataListItemProps, ItemListProps */}
      <List
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => (
          <TitleList >{title}</TitleList>
        )}
      />

      
    </Container>
  );
}
