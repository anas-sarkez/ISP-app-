import { Stack, router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import DrawerContent from "../Components/DrawerContent";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          sceneContainerStyle: { backgroundColor: "transparent" },
          headerShown: false,
          drawerType: "slide",
          freezeOnBlur: true,

          drawerStyle: {
            width: "60%",
            padding: 0,
            paddingRight: 0,
            margin: 0,
            marginRight: 0,
            backgroundColor: "transparent",
          },
          drawerInactiveBackgroundColor: "transparent",
          drawerActiveBackgroundColor: "transparent",
          overlayColor: "transparent",
        }}
      ></Drawer>
    </GestureHandlerRootView>
  );
};
export default _layout;
