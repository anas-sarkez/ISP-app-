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
    <View
      onStartShouldSetResponder={(event) => true}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      className="w-[100%] h-[20%]  relative overflow-hidden rounded-t-3xl justify-center items-center  bg-[#ffffff]"
    >
      <View className="w-full h-[40%] ">
        {/* <LinearGradient
          colors={["#69252e", "#C0091E"]}
          className=" w-full h-[100%] overflow-hidden rounded-t-2xl "
        /> */}

        <Text className="text-[20px] text-center mt-[8%] font-bold text-[#000]">
          Select theme {radioValue}
        </Text>
      </View>
      <View className="w-[100%] mb-5 h-[65%]  items-center justify-around">
        <RadioButton.Group
          onValueChange={(newValue) => setRadioValue(newValue)}
          value={radioValue}
        >
          <View className="w-[90%] flex-row h-[80%]  items-center justify-around">
            <View className="w-[28%] h-[80%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
              <Text className="text-[14px] font-bold text-[#000000]">
                System
              </Text>
              <RadioButton.Android
                onFocus={() => setRadioValue("default")}
                color="#a4161a"
                value="default"
              />
            </View>
            <View className="w-[28%] h-[80%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
              <Text className="text-[14px] font-bold text-[#000000]">
                Light
              </Text>
              <RadioButton.Android
                onFocus={() => setRadioValue("light")}
                color="#a4161a"
                value="light"
              />
            </View>

            <View className="w-[28%] h-[80%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
              <Text className="text-[14px] font-bold text-[#000000]">Dark</Text>
              <RadioButton.Android
                onFocus={() => setRadioValue("dark")}
                color="#a4161a"
                value="dark"
              />
            </View>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default ThemeSettingsContent;
