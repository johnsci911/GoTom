import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View,  SafeAreaView, Platform, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const Search = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <Search>
        <Searchbar />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
    </SafeArea>
  );
};
