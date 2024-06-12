import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View,  SafeAreaView, Platform, StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const Search = styled(View)`
  padding: 16px;
  background-color: "white";
`;

const List = styled(View)`
  flex: 1;
  padding: 16px;
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
