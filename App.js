import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>Search</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "green"
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "gray"
  }
});
