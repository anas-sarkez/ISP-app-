import { View, Text, Platform } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack.Screen
      name="settings"
      options={{
        presentation: Platform.OS === "ios" ? "modal" : "card",
        headerStyle: {
          backgroundColor: "#fff",
        },
        animation: Platform.OS === "ios" ? "flip" : "fade_from_bottom",

        headerBackTitle: Platform.OS === "ios" ? "" : "Cancel",
        headerTitle: Platform.OS === "ios" ? "" : "Data plan",

        headerTitleStyle: {
          color: "#C0091E",
          fontWeight: "bold",

          fontSize: 20,
        },
      }}
    />
  );
};

export default _layout;
