import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./app/config/colors";
//Screnns
import HomeScreen from "./app/screens/HomeScreen";
import coffeees from "./app/config/coffeees";

//Libreries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coffee from "./app/screens/Coffee";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: colors.dark, flex: 1 },
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen name="Coffee" component={Coffee} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
