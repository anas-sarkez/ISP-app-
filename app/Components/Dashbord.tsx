import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Avatar, Button, Icon } from "react-native-paper";
import { Easing } from "react-native-reanimated";
const Dashboard = () => {
  const statusbar = () => StatusBar.setBarStyle("light-content", true);
  const router = useRouter();
  return (
    <View className=" w-full h-[100%]">
      <StatusBar barStyle="light-content" />
      <ImageBackground
        imageStyle={{ opacity: 1 }}
        className="w-screen bg-center   h-[105%]"
        source={require("../../assets/images/dashboard1.png")}
        resizeMode="cover"
      >
        <View className="m-[2%] z-50 mt-[20%]  h-[90%]  justify-evenly items-center ">
          <View className=" w-[90%]  flex-row  justify-evenly items-center ">
            <Icon source="card-account-details" size={45} color="#fff" />
            <Text
              style={styles.box}
              className=" text-2xl font-semibold  py-1 text-white  "
            >
              Anas02
            </Text>
          </View>

          <View className=" justify-center items-center">
            <View
              style={styles.box}
              className="bg-[#fff] w-[250px] mt-5 py-4 h-[250px] rounded-full justify-center items-center  "
            >
              <AnimatedCircularProgress
                size={230}
                width={18}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-33%",
                }}
                fill={50}
                tintColor="#C0091E"
                rotation={-180}
                dashedBackground={{ gap: 0, width: 0 }}
                dashedTint={{ gap: 2, width: 2 }}
                backgroundColor="#fff"
                lineCap="butt"
                duration={2700}
                easing={Easing.inOut(Easing.ease)}
              ></AnimatedCircularProgress>
              <Text className="-mt-[56%] text-[20px] font-bold text-[#0c0b0b]">
                2.01 GB/15 GB
              </Text>

              <Text className="text-[16px] mt-2 font-bold text-[#0f0d0d]">
                5 Days
              </Text>
            </View>
          </View>
          <View className="w-full justify-center items-center ">
            <Text className="text-[20px] font-medium text-[#331919]">
              Balance: <Text className="font-semibold ">10.000 LYD</Text>
            </Text>
          </View>
          <View className="flex-row  w-[80%] mt-2 items-center justify-between">
            <Text className="text-[16px] font-bold text-[#1D1D2E]">
              <Text className="font-black text-[18px] ">Name:</Text> Anas Sarkiz
            </Text>
            <Text className="text-[16px] font-bold text-[#1D1D2E]">
              <Text className="font-black text-[18px] ">Status:</Text> Active
            </Text>
          </View>
          <View className="items-center w-[80%] mb-7 mt-12"></View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  box: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.7,
    shadowRadius: 1.3,
    shadowOffset: {
      height: 1.5,
      width: 1.5,
    },
  },
});
const stylesType: StyleSheet.NamedStyles<any> = styles;
