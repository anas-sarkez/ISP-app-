import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Towers" />
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
};

export default _layout;
