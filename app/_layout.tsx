import { SplashScreen, Stack } from "expo-router";
import { Appearance, Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./store";
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <Stack
            screenOptions={{ contentStyle: { backgroundColor: "#ffefef" } }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen
              name="settings"
              options={{
                // presentation: Platform.OS === "ios" ? "modal" : "card",
                headerStyle: {
                  backgroundColor: "#f2f2f2",
                },
                animation: "slide_from_right",

                headerBackTitle: "Back",

                headerTitleStyle: {
                  color: "#C0091E",
                  fontWeight: "bold",
                  fontSize: 20,
                },
              }}
            />

            <Stack.Screen
              name="TopUp"
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="modal"
              options={{
                presentation: Platform.OS === "ios" ? "modal" : "card",
                headerStyle: {
                  backgroundColor: "#fff",
                },
                animation: Platform.OS === "ios" ? "flip" : "slide_from_bottom",

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
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
