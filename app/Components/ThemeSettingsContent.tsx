import { View, Text, Alert, Platform } from "react-native";
import React, { useState } from "react";
import { Button, IconButton, RadioButton, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import { confirm } from "../helpers/confirm";
const ThemeSettingsContent = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [radioValue, setRadioValue] = useState("default");

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  return (
    <View className="w-[100%] h-[40%]  relative overflow-hidden rounded-3xl justify-center items-center  bg-white">
      <View className="w-full h-[20%] overflow-hidden rounded-t-2xl ">
        <LinearGradient
          colors={["#69252e", "#C0091E"]}
          className=" w-full h-[100%] overflow-hidden rounded-t-2xl "
        />
        <IconButton
          icon="close-circle"
          iconColor="#fff"
          size={30}
          className="absolute top-1 left-2"
          onPress={() => setModalOpen(false)}
        />
        <Text className="text-[20px]  absolute top-1/3 left-[34.5%]  font-bold text-[#fff]">
          Select theme {radioValue}
        </Text>
      </View>
      <View className="w-[100%] h-[80%] bg-[#f2f2f2] items-center justify-center">
        <RadioButton.Group
          onValueChange={(newValue) => setRadioValue(newValue)}
          value={radioValue}
        >
          <View className="w-[90%] h-[23%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
            <Text className="text-[18px] font-bold text-[#000000]">
              Default Theme
            </Text>
            <RadioButton.Android
              onFocus={() => setRadioValue("default")}
              color="#69252e"
              value="default"
            />
          </View>
          <View className="w-[90%] h-[23%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
            <Text className="text-[18px] font-bold text-[#000000]">
              Light Theme
            </Text>
            <RadioButton.Android
              onFocus={() => setRadioValue("light")}
              color="#69252e"
              value="light"
            />
          </View>

          <View className="w-[90%] h-[23%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
            <Text className="text-[18px] font-bold text-[#000000]">
              Dark Theme
            </Text>
            <RadioButton.Android
              onFocus={() => setRadioValue("dark")}
              color="#69252e"
              value="dark"
            />
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default ThemeSettingsContent;
