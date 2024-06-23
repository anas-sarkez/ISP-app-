import { useRouter } from "expo-router";
import React from "react";
import { Platform, View, Text, StyleSheet, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Avatar, Button, Icon } from "react-native-paper";

const Dashboard = () => {
  const router = useRouter();
  return (
    <ScrollView className=" w-full h-[100%] bg-[#ffffff] ">
      <View className="m-3 py-5  h-[95%] border-[2px] border-[#a14040] rounded-3xl bg-[#f5f5f5d2]">
        <View className="pl-4 pt-2 flex-row w-full ">
          <Avatar.Image
            size={45}
            source={require("../../assets/images/people.png")}
          />
          <Text className=" text-2xl font-black py-1  pl-[10%] text-[#a14040]  ">
            Account Username
          </Text>
        </View>
        <View className=" items-center mt-6 ">
          <View className="flex-row  w-[80%] mt-2 items-center justify-between">
            <Text className="text-[16px] font-medium text-[#a14040]">
              <Text className="font-black text-[16px] ">Name:</Text> Anas Sarkiz
            </Text>
            <Text className="text-[16px] font-medium text-[#a14040]">
              <Text className="font-black text-[16px]">States:</Text> Active
            </Text>
          </View>
        </View>

        <View className="w-full justify-center items-center -mt-6 h-[35%] ">
          <View
            style={stylesType.box}
            className="border-2 py-4 w-[80%] bg-[#fff] border-[#a14040] overflow-hidden rounded-3xl items-center mt-8 "
          >
            <AnimatedCircularProgress
              size={200}
              width={15}
              fill={63}
              tintColor="#973131"
              backgroundColor="#5e5151"
              rotation={-100}
              lineCap="round"
              delay={500}
              style={stylesType.box}
              duration={500}
              arcSweepAngle={200}
            ></AnimatedCircularProgress>
            <Text className="-mt-24 text-[22px] font-black text-[#a14040]">
              2.014 GB
            </Text>
          </View>
        </View>
        <View className="w-full justify-center items-center mt-3">
          <Text className="text-[16px] font-medium text-[#a14040]">
            Balance: <Text className="font-black ">10.000 LYD</Text>
          </Text>
        </View>
        <View className="w-full justify-center items-center">
          <View className=" h-[210px] w-[95%]  justify-center mt-4 flex-row">
            <View className="w-[50%] h-[100%]">
              <View
                style={stylesType.box}
                className="font-bold border-2 shadow-2xl text-center  rounded-2xl border-[#a14040] bg-[#fff] h-[50%]  m-[6]"
              >
                <Text className="text-[16px] mt-5 text-center font-bold text-[#a14040] ">
                  Consumed{"  "}
                  <Icon size={20} source="chart-line" color="#973131"></Icon>
                </Text>
                <Text className="text-[14px]   mt-2 text-center  text-[#a14040]">
                  12.014 GB
                </Text>
              </View>
              <View
                style={stylesType.box}
                className="font-bold  border-2 shadow-2xl text-center  rounded-2xl border-[#a14040] bg-[#fff] h-[50%]  m-[6]"
              >
                <Text className="text-[16px] mt-5 text-center font-bold text-[#a14040] ">
                  Remaining{"   "}
                  <Icon size={20} source="chart-donut" color="#973131"></Icon>
                </Text>
                <Text className="text-[14px] text-center mt-2 text-[#a14040]">
                  2.014 GB
                </Text>
              </View>
            </View>
            <View className="w-[50%] h-full ">
              <View
                style={stylesType.box}
                className="font-bold border-2 shadow-2xl   rounded-2xl border-[#a14040] bg-[#ffffff] h-[50%]  m-[6]"
              >
                <Text className="text-[16px] mt-5 text-center font-bold text-[#a14040] ">
                  Expiration Date{"  "}
                  <Icon
                    size={20}
                    source="calendar-month"
                    color="#973131"
                  ></Icon>
                </Text>
                <Text className="text-[14px] text-center    mt-2 text-[#a14040]">
                  20/06/2024
                </Text>
              </View>
              <View
                style={stylesType.box}
                className="font-bold border-2 shadow-2xl   rounded-2xl border-[#a14040] bg-[#ffffff] h-[50%]  m-[6]"
              >
                <Text className="text-[16px] mt-5 text-center font-bold text-[#a14040]">
                  Package Name{" "}
                  <Icon
                    size={20}
                    source="package-variant"
                    color="#973131"
                  ></Icon>
                </Text>
                <Text className="text-[14px]   mt-2 text-center  text-[#a14040]">
                  Package 1
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="items-center mb-7 mt-12">
          <Button
            icon="credit-card"
            mode="contained"
            className="bg-[#973131] text-white w-[60%] rounded-3xl"
            onPress={() => router.push("/modal")}
          >
            Data Plan
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  box: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
const stylesType: StyleSheet.NamedStyles<any> = styles;
