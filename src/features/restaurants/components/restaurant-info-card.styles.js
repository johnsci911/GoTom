import { Image, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[1]}
    0;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const Rating = styled(View)`
  flex-direction: row;
  gap: ${(props) => props.theme.space[0]};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const SectionEnd = styled(View)`
  flex: 1;
  gap: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: flex-end;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[4]} 0;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
