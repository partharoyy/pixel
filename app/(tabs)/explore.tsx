import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Explore = () => {
  return (
    <SafeAreaView>
      <Text>Explore Page</Text>
      <Link href='/accountInfo'>Go to account page</Link>
    </SafeAreaView>
  );
};

export default Explore;
