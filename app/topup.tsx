import { useState } from "react";
import { View, Text, Alert, Platform } from "react-native";
import { List, TextInput, Button, Icon, IconButton } from "react-native-paper";
import { packege } from "./helpers/packege";
import { confirm } from "./helpers/confirm";
import * as Notifications from "expo-notifications";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const TopUp = () => {
  const [text, setText] = useState("");
  // const [expanded, setExpanded] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(packege.limited[1]);
  // const handlePress = () => setExpanded(!expanded);
  const [checkCard, setCheckCard] = useState(true);
  const [balance, setBalance] = useState(0);
  const [cardNo, setCardNo] = useState("");
  const [valid, setValid] = useState(false);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  return (
    <View className="w-full h-[100%] bg-[#f2f2f2]">
      <LinearGradient
        colors={["#C0091E", "#69252e"]}
        className="rounded-t-3xl"
        style={{
          position: "absolute",
          borderWidth: 0,

          width: "100%",
          right: 0,
          bottom: 0,
          height: "80%",
        }}
      />
      <View className="items-center h-[20%] justify-center">
        <IconButton
          className="absolute top-5 left-5"
          icon="arrow-left"
          iconColor="#000"
          size={30}
          onPress={() => {
            router.back();
          }}
        />
        <Text className="text-[20px] font-bold text-[#1D1D2E]">Top Up</Text>
      </View>
      <View className="w-[100%] h-[80%] items-center justify-center ">
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
          الرصيد الحالي: <Text className="font-medium ">{balance} دينار</Text>
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
              } else {
                Alert.alert("Error", "Invalid Card Number");
              }
            }}
          >
            اضافة رصيد
          </Button>
        </View>
      </View>
    </View>
  );
};

export default TopUp;
