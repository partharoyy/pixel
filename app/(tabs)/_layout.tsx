import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen name='index' options={{ title: "For you" }} />
      <Tabs.Screen name='account' options={{ title: "Account" }} />
      <Tabs.Screen name='explore' options={{ title: "Explore" }} />
    </Tabs>
  );
}
