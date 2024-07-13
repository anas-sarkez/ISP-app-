import { View, Text, Alert, Platform } from "react-native";
import React, { useState } from "react";
import { Button, IconButton, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import { confirm } from "../helpers/confirm";
const TopUpContent = ({
  modalOpen,
  setModalOpen,
  balance,
  setBalance,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [checkCard, setCheckCard] = useState(true);
  const [cardNo, setCardNo] = useState("");

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  return (
    <View className="w-[85%] h-[35%]  relative overflow-hidden rounded-3xl justify-center items-center  bg-white">
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
        <Text className="text-[20px]  absolute top-1/3 left-[40%]  font-bold text-[#fff]">
          Top Up
        </Text>
      </View>
      <View className="w-[100%] h-[80%] bg-[#f2f2f2] items-center justify-center">
        <TextInput
          label="  Card Number"
          value={cardNo}
          onChangeText={(text) => {
            setCardNo(text);
            setCheckCard(text.length === 8);
          }}
          mode="outlined"
          className="bg-white w-[90%] my-6"
          activeOutlineColor="#C0091E"
          outlineStyle={{
            borderRadius: 20,
          }}
          outlineColor="#C4C4C4"
          placeholderTextColor="#C4C4C4"
          textColor="#0F0017"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholder=" 1234 5678 9012 3456"
          maxLength={8}
          left={<TextInput.Icon icon="sort-numeric-variant" color="#C0091E" />}
        />
        <Text className="text-[16px] text-center font-black text-[#1D1D2E]">
          Current Balance: <Text className="font-medium ">{balance} LYD</Text>
        </Text>
        <View className="w-[100%] py-6  flex-row justify-around">
          <Button
            mode="contained"
            labelStyle={{ color: "white" }}
            disabled={!checkCard}
            icon="currency-usd"
            className={`${
              checkCard ? "bg-[#1D1D2E]" : "bg-[#9e9999]"
            }  text-white mb-[5%] w-[50%] rounded-xl`}
            onPress={async () => {
              if (cardNo === "") {
                Alert.alert("Error", "Please Enter Card Number");
                return;
              }
              const shouldContinue = await confirm(
                "Confirm",
                "Do you want to proceed?"
              );
              if (!shouldContinue) return;

              if (cardNo === "12345678" && shouldContinue) {
                await Notifications.scheduleNotificationAsync({
                  content: {
                    title: "Sela",
                    body: "You have added 10 LYD 💰",
                    sound: Platform.OS === "android" ? undefined : "default",
                  },
                  trigger: {
                    seconds: 1,
                  },
                });
                setBalance((prevBalance) => prevBalance + 10);
                setCardNo("");
              } else {
                Alert.alert("Error", "Invalid Card Number");
              }
            }}
          >
            Top Up
          </Button>
        </View>
      </View>
    </View>
  );
};

export default TopUpContent;
