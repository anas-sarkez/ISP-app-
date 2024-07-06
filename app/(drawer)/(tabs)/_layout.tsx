import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import LogoTitle from "../../Components/LogoTitle";
import { Icon } from "react-native-paper";
import DrawerViewWrapper from "@/app/Components/DrawerViewWrapper";
import AnimatedTabBar from "@/app/Components/AnimatedTabBar";

const _layout = () => {
  return (
    <DrawerViewWrapper>
      <Tabs
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={{
          tabBarActiveTintColor: "#C0091E",
          tabBarInactiveTintColor: "#C4C4C4",

          headerShown: false,
        }}
        tabBar={(props) => <AnimatedTabBar {...props} />}
        initialRouteName="dashboard"
        backBehavior="initialRoute"
      >
        <Tabs.Screen
          name="menu"
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
        />

        <Tabs.Screen name="dashboard" />

        <Tabs.Screen name="data" />
        <Tabs.Screen name="towers" />
        {/* <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon(props) {
            return (
              <Icon
                source="cog"
                size={30}
                color={`${props.focused ? "#C0091E" : "#C4C4C4"}`}
              />
            );
          },
        }}
      /> */}
      </Tabs>
    </DrawerViewWrapper>
  );
};

export default _layout;
