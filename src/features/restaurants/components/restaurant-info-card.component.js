import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[4]} 0;
`;

const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[1]}
    0;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  gap: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: flex-end;
`;

const Rating = styled(View)`
  flex-direction: row;
  gap: ${(props) => props.theme.space[0]};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

const TemporaryClosed = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.error};
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <TemporaryClosed variant="label">
                Closed Temporarily
              </TemporaryClosed>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </Info>
    </RestaurantCard >
  );
};
