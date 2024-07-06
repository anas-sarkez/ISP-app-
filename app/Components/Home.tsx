import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
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
import { LinearGradient } from "expo-linear-gradient";
const Home = () => {
  const progress = useDrawerProgress();
  const statusbar = () => StatusBar.setBarStyle("light-content", true);
  const router = useRouter();

  return (
    <View className=" w-full h-[100%]">
      <StatusBar barStyle="light-content" />
      {/* <ImageBackground
        imageStyle={{ opacity: 1 }}
        className="w-screen bg-center  overflow-hidden   h-[105%]"
        source={require("../../assets/images/dashboard1.png")}
        resizeMode="cover" */}
      {/* > */}
      {/* background: linear-gradient(45deg, #e34646 10%,transparent 10%,transparent 90%,#e34646 90%),linear-gradient(135deg, transparent 40%, #e3464680 40%, #e3464680 60%, transparent 0),linear-gradient(45deg, transparent 40%, #e34646 40%, #e34646 60%, transparent 0);
        background-size: 3em 3em;
        background-color: #ffffff;
        opacity: 1 */}
      <View className="w-fill h-[100%] items-center bg-white justify-center">
        <LinearGradient
          colors={["#000", "#69252e", "#C0091E"]}
          style={{
            position: "absolute",
            left: -85,
            borderWidth: 0,
            borderCurve: "circular",
            borderBottomRightRadius: 400,
            borderBottomLeftRadius: 400,
            width: "140%",
            right: 0,
            top: -30,
            height: "40%",
          }}
        />
        <LinearGradient
          colors={["#C0091E", "#69252e", "#000"]}
          style={{
            position: "absolute",
            left: -85,
            borderWidth: 0,
            borderCurve: "circular",
            borderTopRightRadius: 400,
            borderTopLeftRadius: 400,
            width: "140%",
            right: 0,
            bottom: -40,
            height: 140,
          }}
        />
        <View className="h-[80%]  justify-start items-center ">
          <View className=" w-[90%]  flex-row  -translate-x-8 justify-evenly items-center ">
            <Icon source="card-account-details" size={45} color="#fff" />
            <Text
              style={styles.box}
              className=" text-2xl font-semibold  py-1 text-white  "
            >
              NotAnas
            </Text>
          </View>

          <View className=" justify-center items-center mt-[10%] ">
            <View
              style={(styles.box, [{ elevation: 30 }])}
              className="bg-[#fff] w-[250px]  h-[250px] rounded-full justify-center items-center  "
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
          <View className="w-full flex-row text-center mt-[8%] items-center ">
            <Text className="text-[24px] mr-2 font-bold text-[#331919]">
              Balance:{" "}
              <Text className="text-[22px] font-semibold ">10.000 LYD </Text>
            </Text>
            <Icon source="account-cash" size={25} color="#7c1e1e" />
          </View>

          <View className="items-center w-[80%] mb-7">
            <Text className="text-[16px] font-bold text-[#1D1D2E]">
              Anouncment
            </Text>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.85,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 2,
    },
  },
});
const stylesType: StyleSheet.NamedStyles<any> = styles;
