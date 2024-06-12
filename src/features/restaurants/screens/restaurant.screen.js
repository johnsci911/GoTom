import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

export const RestaurantScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar />
			</View>
			<View style={styles.list}>
				<RestaurantInfoCard />
			</View>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
  container: {
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
