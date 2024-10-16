import { View, Text, Button } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const NoBottomBarLayout = () => {
  return (
    <View>
      <Button title='Go back'></Button>
      <Slot />
    </View>
  );
};

export default NoBottomBarLayout;
