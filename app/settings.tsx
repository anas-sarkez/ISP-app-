import {
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  Pressable,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { Button, Icon, IconButton, List } from "react-native-paper";
import { router } from "expo-router";
import ThemeSettingsContent from "./Components/ThemeSettingsContent";
import Modal from "./Components/ThemeSettingsModal";
// import {  } from "react-native-paper";

const settings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View className=" h-full items-center justify-start  bg-[#d7d7d7]">
      <IconButton
        onPress={() => router.push("home")}
        size={25}
        icon={"arrow-left"}
        iconColor="black"
        className=" absolute top-[5%] left-[1%]"
      ></IconButton>

      <View className="w-full h-[13%] mt-[45%] ">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalOpen(true)}
          className="w-full h-[85%]  bg-[#313131] justify-around items-center flex-row"
        >
          <Text className="text-[20px]  font-bold text-[#fff]">
            Theme Settings
          </Text>
          <Icon size={25} source="theme-light-dark" color="#fff"></Icon>
        </TouchableOpacity>
        <Modal
          onDismiss={() => setModalOpen(false)}
          inOpen={modalOpen}
          withInput={true}
          setModalOpen={setModalOpen}
        >
          <ThemeSettingsContent
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </Modal>
      </View>
    </View>
  );
};

export default settings;
