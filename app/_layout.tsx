import { SplashScreen, Stack } from "expo-router";
import { Alert, Appearance, Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid, AppRegistry } from "react-native";
import * as Notifications from "expo-notifications";
import useStore from "./store/notificationsStore";

// SplashScreen.preventAutoHideAsync();
messaging()
  .subscribeToTopic("all_users")
  .then(() => console.log("Subscribed to topic!"));

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
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function RootLayout() {
  const updateNotification = (newValue: any) => {
    useStore.setState({ notifications: newValue });
  };

  let data;

  useEffect(() => {
    // Listen for incoming messages
    const unSubscribe = messaging().onMessage(async (remoteMessage) => {
      async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage?.notification?.title,
            body: remoteMessage?.notification?.body ?? "Default Mess age",
          },
          trigger: null,
        });
      }

      const resData = remoteMessage?.data?.Data;
      data = JSON.parse(typeof resData === "string" ? resData : "[]");

      updateNotification(data);
      console.log(typeof data);

      schedulePushNotification();
    });
    return unSubscribe;
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
