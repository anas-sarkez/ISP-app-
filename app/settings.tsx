import {
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";

import React from "react";
import { Button, Icon, IconButton, List } from "react-native-paper";
import { router } from "expo-router";
// import {  } from "react-native-paper";

const settings = () => {
  return (
    <View className=" h-full items-center justify-center bg-[#f2f2f2]">
      <IconButton
        onPress={() => router.push("home")}
        size={25}
        icon={"arrow-left"}
        iconColor="black"
        className=" absolute top-[5%] left-[1%]"
      ></IconButton>

      <View className="w-full h-[70%] mt-[15%]">
        <List.Accordion
          title="Limited Packages"
          rippleColor={"#f2f2f23b"}
          style={{
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderColor: "#C0091E",
            width: "100%",
          }}
          titleStyle={{ color: "#1D1D2E" }}
          left={(props) => (
            <List.Icon {...props} icon="car-speed-limiter" color="#C0091E" />
          )}
        >
          <View>
            <Text>goes here</Text>
          </View>
        </List.Accordion>
      </View>
    </View>
  );
};

export default settings;
