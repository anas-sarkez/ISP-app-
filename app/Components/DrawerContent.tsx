import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Redirect, router } from "expo-router";
import { Button } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        height: "100%",
        justifyContent: "center",
      }}
      {...props}
    >
      <View className=" ml-3  h-[90%]  w-[100%]   ">
        <View className=" w-[100%]   items-center  h-[20%] ">
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
            style={{ backgroundColor: "#ba0f23" }}
          />
          <Text className="pl-[10%] text-[#1D1D2E] text-[22px] font-medium">
            Anas
          </Text>
        </View>
        <View className="  h-[45%] w-[100%]  mt-[8%] ">
          <DrawerItem
            style={{ padding: 0, width: "100%" }}
            icon={({ color, size }) => (
              <Feather name="user" size={35} color={"#a90606"} />
            )}
            label={"Profile"}
            onPress={() => {
              router.push("profile");
            }}
            labelStyle={{
              color: "#a90606",
              fontWeight: "bold",
              fontSize: 20,
            }}
          />
          <DrawerItem
            style={{ padding: 0, width: "100%" }}
            icon={({ color, size }) => (
              <Feather name="settings" size={35} color={"#a90606"} />
            )}
            label={"Settings"}
            onPress={() => {
              router.push("settings");
            }}
            labelStyle={{
              color: "#a90606",
              fontWeight: "bold",
              fontSize: 20,
            }}
          />
          <DrawerItem
            style={{ padding: 0, width: "100%" }}
            icon={({ color, size }) => (
              <Feather name="alert-circle" size={35} color={"#a90606"} />
            )}
            label={"About the app"}
            onPress={() => {
              router.push("/(drawer)/(tabs)/Map");
            }}
            labelStyle={{
              color: "#a90606",
              fontWeight: "bold",
              fontSize: 20,
            }}
          />
        </View>
        <View className="w-full h-[15%] items-center ">
          <Button
            labelStyle={{ color: "white" }}
            icon="logout"
            mode="contained"
            className="bg-[#a90606] text-white mt-[10%] w-[70%] rounded-3xl"
            onPress={() => {
              router.push("/");
            }}
          >
            Log out
          </Button>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
