import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import LogoTitle from "../../Components/LogoTitle";
import { Icon } from "react-native-paper";
import DrawerViewWrapper from "@/app/Components/DrawerViewWrapper";

const _layout = () => {
  return (
    <DrawerViewWrapper>
      <Tabs
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={{
          // header: (props) => <LogoTitle {...props} />,
          tabBarActiveTintColor: "#C0091E",
          tabBarInactiveTintColor: "#C4C4C4",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Menu"
          options={{
            headerShown: false,
            tabBarIcon(props) {
              return (
                <Icon
                  source="menu"
                  size={30}
                  // color={`${isDrawerOpen ? "#C0091E" : "#C4C4C4"}`}
                />
              );
            },
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
        />
        <Tabs.Screen
          name="Towers"
          options={{
            tabBarIcon(props) {
              return (
                <Icon
                  source="transmission-tower"
                  size={30}
                  color={`${props.focused ? "#C0091E" : "#C4C4C4"}`}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarIcon(props) {
              return (
                <Icon
                  source="view-dashboard"
                  size={30}
                  color={`${props.focused ? "#C0091E" : "#C4C4C4"}`}
                />
              );
            },
          }}
        />

        <Tabs.Screen
          name="dataDisplay"
          options={{
            title: "Data",
            tabBarIcon(props) {
              return (
                <Icon
                  source="chart-bar"
                  size={30}
                  color={`${props.focused ? "#C0091E" : "#C4C4C4"}`}
                />
              );
            },
          }}
        />
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
