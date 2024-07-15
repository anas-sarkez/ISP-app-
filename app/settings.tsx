import {
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  Pressable,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { Button, Icon, IconButton, List, Switch } from "react-native-paper";
import { router } from "expo-router";
import ThemeSettingsContent from "./CustomModal/ThemeSettingsContent";
import LanguageContent from "./CustomModal/LanguageContent";
import TModal from "./CustomModal/ThemeSettingsModal";
import LModal from "./CustomModal/LanguageModal";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
const settings = () => {
  const [ThemeModalOpen, setThemeModalOpen] = useState(false);
  const [LanguageModalOpen, setLanguageModalOpen] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  return (
    <View className=" h-full items-center justify-start  bg-[#fff]">
      <StatusBar style="light" />
      <View className="w-full relative h-[22%] items-center justify-center">
        <LinearGradient
          colors={["#69252e", "#ba0f23"]}
          className=" w-full h-[100%] overflow-hidden rounded-t-2xl "
        />
        <IconButton
          onPress={() => router.back()}
          size={40}
          icon={"arrow-left"}
          iconColor="white"
          className=" absolute top-[20%] left-[2%]"
        ></IconButton>
        <Text className="text-[44px] absolute bottom-4 left-3 font-bold text-[#fff]">
          Settings
        </Text>
        <View className="absolute bottom-4 right-5">
          <Icon source="cog-outline" size={50} color="#fff"></Icon>
        </View>
      </View>
      <View className="w-[90%] items-center justify-start mt-5 h-[65%]  ">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setThemeModalOpen(true)}
          className="w-full rounded-3xl h-[15%] mt-[6%] bg-[#dddcdc] justify-around items-center flex-row"
        >
          <Text className="text-[24px]  font-bold text-[#000]">
            Theme Settings
          </Text>
          <Icon size={40} source="theme-light-dark" color="#a4161a"></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setBiometricEnabled(!biometricEnabled)}
          className="w-full rounded-3xl h-[15%] mt-[6%] bg-[#dddcdc] justify-around items-center flex-row"
        >
          <Text className="text-[24px]  font-bold text-[#000]">
            Enable biometric
          </Text>
          <Switch
            value={biometricEnabled}
            onValueChange={setBiometricEnabled}
            color="#000"
            trackColor={{ false: "#767577", true: "#ba0f23" }}
          ></Switch>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setLanguageModalOpen(true)}
          className="w-full rounded-3xl h-[15%] mt-[6%] bg-[#dddcdc] justify-around items-center flex-row"
        >
          <Text className="text-[24px]  font-bold text-[#000]">
            Language Settings{" "}
          </Text>
          <Icon size={40} source="earth" color="#a4161a"></Icon>
        </TouchableOpacity>
        <TModal
          inOpen={ThemeModalOpen}
          withInput={true}
          setModalOpen={setThemeModalOpen}
        >
          <ThemeSettingsContent
            modalOpen={ThemeModalOpen}
            setModalOpen={setThemeModalOpen}
          />
        </TModal>
        <LModal inOpen={LanguageModalOpen} setModalOpen={setLanguageModalOpen}>
          <LanguageContent />
        </LModal>
      </View>
    </View>
  );
};

export default settings;
