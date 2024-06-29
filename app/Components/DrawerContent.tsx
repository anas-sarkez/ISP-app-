import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Redirect, router } from "expo-router";
import { Button } from "react-native-paper";
import { Avatar } from "react-native-paper";

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ height: "100%", justifyContent: "center" }}
      {...props}
    >
      <View className="  h-[90%]  w-[100%]   ">
        <View className=" w-[100%]   items-center  h-[18%] ">
          {/* <Text className="pl-[8%] text-[#1D1D2E] text-xl font-medium mt-[4%]">
            SelaNet
          </Text> */}
          <Image
            source={require("../../assets/images/logo_landscape.png")}
            className="w-[85%] h-[100%] "
          />
        </View>
        <View className="h-[10%] w-[100%] flex-row items-center justify-start ml-[4%]">
          <Avatar.Text
            size={60}
            label="A"
            color="white"
            style={{ backgroundColor: "#7c1e1e" }}
          />
          <Text className="pl-[10%] text-[#1D1D2E] text-xl font-medium">
            ABSE
          </Text>
        </View>
        <View className=" border-2 border-red-500 h-[55%] w-[100%]  mt-[8%] ">
          <DrawerItem
            style={{ padding: 0, width: "100%" }}
            icon={({ color, size }) => (
              <Feather name="user" size={24} color={"#7c1e1e"} />
            )}
            label={"Profile"}
            onPress={() => {
              router.push("profile");
            }}
          />
          <DrawerItem
            style={{ padding: 0, width: "100%" }}
            icon={({ color, size }) => (
              <Feather name="settings" size={24} color={"#7c1e1e"} />
            )}
            label={"Settings"}
            onPress={() => {
              router.push("settings");
            }}
          />
          <DrawerItem
            style={{ padding: 0, width: "100%" }}
            icon={({ color, size }) => (
              <Feather name="alert-circle" size={24} color={"#7c1e1e"} />
            )}
            label={"About the app"}
            onPress={() => {
              router.push("/(drawer)/(tabs)/Towers");
            }}
          />
        </View>
        <View className="w-full h-[15%] items-center ">
          <Button
            labelStyle={{ color: "white" }}
            icon="logout"
            mode="contained"
            className="bg-[#7c1e1e] text-white mt-[10%] w-[70%] rounded-3xl"
            onPress={() => console.log("pressed")}
          >
            Data Plane
          </Button>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
