import { Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding-vertical: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[1]} 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
