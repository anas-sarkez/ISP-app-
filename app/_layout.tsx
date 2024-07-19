import { SplashScreen, Stack } from "expo-router";
import { Alert, Appearance, Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid, AppRegistry } from "react-native";
// SplashScreen.preventAutoHideAsync();

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

AppRegistry.registerComponent("rootLayout", () => RootLayout);
if (Platform.OS === "android") {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
}
if (Platform.OS === "ios") {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }
}

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
