import { Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding-vertical: 20px;
`;

const CardCover = styled(Card.Cover)`
  padding: 0px;
`;

const RestaurantCard = styled(Card)`
  padding: 16px 16px 0;
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
