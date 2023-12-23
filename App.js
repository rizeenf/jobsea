import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OpeningScreen from "./src/screens/OpeningScreen";
import BottomTab from "./src/components/BottomTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Jobsea">
        <Stack.Screen
          name="Opening"
          component={OpeningScreen}
          options={{
            title: "Login",
            headerTitle: false,
            headerTransparent: true,
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomTab}
          options={{
            headerTransparent: true,
            title: "Jobsea",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
