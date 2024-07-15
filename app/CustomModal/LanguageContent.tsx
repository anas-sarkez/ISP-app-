import { View, Text, Alert, Platform } from "react-native";
import React, { useState } from "react";
import { Button, IconButton, RadioButton, TextInput } from "react-native-paper";
import { confirm } from "../helpers/confirm";
const ThemeSettingsContent = () => {
  const [radioValue, setRadioValue] = useState("system");

  return (
    <View
      onStartShouldSetResponder={(event) => true}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      className="w-[100%] h-[20%]  relative overflow-hidden rounded-3xl justify-center items-center  bg-[#ffffff]"
    >
      <View className="w-full h-[40%] overflow-hidden rounded-t-2xl ">
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
                onFocus={() => setRadioValue("system")}
                color="#a4161a"
                value="system"
              />
            </View>
            <View className="w-[28%] h-[80%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
              <Text className="text-[14px] font-bold text-[#000000]">
                English
              </Text>
              <RadioButton.Android
                onFocus={() => setRadioValue("English")}
                color="#a4161a"
                value="English"
              />
            </View>

            <View className="w-[28%] h-[80%] rounded-xl px-4 bg-slate-200 mt-6 flex-row items-center justify-between">
              <Text className="text-[14px] font-bold text-[#000000]">
                Arabic
              </Text>
              <RadioButton.Android
                onFocus={() => setRadioValue("Arabic")}
                color="#a4161a"
                value="Arabic"
              />
            </View>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default ThemeSettingsContent;
