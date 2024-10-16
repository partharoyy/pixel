import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "transparent" },
        }}
      >
        <Tab.Screen name='Library' component={HomeScreen} />
        <Tab.Screen name='Liked' component={SettingsScreen} />
        <Tab.Screen name='Suggested' component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default ForYou;

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
