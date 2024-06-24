import { SplashScreen, Stack } from "expo-router";
import { Appearance, Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: Platform.OS === "ios" ? "modal" : "card",
            headerStyle: {
              backgroundColor: "#fff",
            },
            animation: Platform.OS === "ios" ? "flip" : "slide_from_right",

            headerBackTitle: Platform.OS === "ios" ? "" : "Cancel",
            headerTitle: Platform.OS === "ios" ? "" : "Data plan",

            headerTitleStyle: {
              color: "#C0091E",
              fontWeight: "bold",

              fontSize: 20,
            },
          }}
        />
      </Stack>
      <StatusBar barStyle={"light-content"} />
    </SafeAreaProvider>
  );
}
