import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#973131",
        tabBarInactiveTintColor: "#C4C4C4",
      }}
    >
      <Tabs.Screen name="Towers" />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerStyle: {
            backgroundColor: "#fff",
            height: 100,
            borderColor: "#fff",
            borderWidth: 2,
          },
          headerTintColor: "#973131",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
};

export default _layout;
