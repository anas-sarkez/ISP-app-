import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import LogoTitle from "../Components/LogoTitle";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        header: (props) => <LogoTitle {...props} />,
        tabBarActiveTintColor: "#973131",
        tabBarInactiveTintColor: "#C4C4C4",
      }}
    >
      {/* <Tabs.Screen name="Towers" />
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="setting" /> */}
    </Tabs>
  );
};

export default _layout;
