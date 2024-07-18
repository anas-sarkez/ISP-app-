import { SplashScreen, Stack } from "expo-router";
import { Appearance, Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
