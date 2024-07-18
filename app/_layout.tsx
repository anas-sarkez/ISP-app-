import { SplashScreen, Stack } from "expo-router";
import { Appearance, Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";
import React, { useEffect } from "react";
import { Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { AppRegistry } from "react-native";

// SplashScreen.preventAutoHideAsync();
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

export default function RootLayout() {
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("Token :", token);
  };
  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
      console.log(typeof remoteMessage);
    });
    getToken();
  }, []);
  const [balance, setBalance] = useState(5);
  const [currentPackage, setCurrentPackage] = useState("Limited3");

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Stack screenOptions={{ contentStyle: { backgroundColor: "#DCDBDE" } }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(drawer)"
            initialParams={{ balance, setBalance }}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="settings"
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="profile"
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
        </Stack>
        <StatusBar barStyle={"light-content"} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
AppRegistry.registerComponent("layout", () => RootLayout);
