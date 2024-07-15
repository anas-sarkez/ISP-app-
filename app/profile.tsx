import { View, Text, TextComponent } from "react-native";
import React from "react";
import { Button, Icon, Avatar, IconButton } from "react-native-paper";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const profile = () => {
  return (
    <View className="  flex-1 bg-[#fff] relative items-center justify-center w-full h-[100%] ">
      <StatusBar style="light" />
      <View className="w-full relative h-[23%] items-center justify-center">
        <LinearGradient
          className="absolute -z-20 w-full h-[100%]"
          colors={["#69252e", "#C0091E"]}
        />
        <IconButton
          onPress={() => router.back()}
          size={25}
          icon={"arrow-left"}
          iconColor="white"
          className=" absolute top-[45%] left-[1%]"
        ></IconButton>
        <Text className="absolute bottom-[20%] self-center text-white text-[25px]">
          الحساب الشخصي
        </Text>
      </View>
      {/* <Avatar.Text
        className="absolute z-10 top-[12%] self-center "
        size={130}
        label="AA"
      ></Avatar.Text> */}

      <View className="w-full bg-white h-[85%] rounded-t-3xl -z-10 justify-end  ">
        <View className=" w-full h-[100%]">
          <View className="h-[25%] items-center justify-center">
            <View className="  w-[35%]  mt-[6%]  h-[75%] rounded-full justify-center self-center items-center bg-[#a90f21]">
              <Text className="text-white text-[50px]">AB</Text>
            </View>
          </View>
          <Text className="text-center  font-semibold text-[24px]">
            عبدالسلام اللولبي
          </Text>
          <View className="justify-center h-[75%] items-center mt-[5%]">
            <View className="w-[90%] h-full">
              <Text className="text-[12px] text-[#a90f21] font-semibold text-start mb-[1%] mx-[4%]">
                اسم المستخدم
              </Text>
              <View className="flex-row items-center justify-between w-full  bg-[#c5c5c53b] rounded-xl h-[10%] px-[5%]">
                <Icon source={"account"} color="#a90f21" size={20} />
                <Text className="text-[16px] font-medium">ab8795</Text>
              </View>
              <Text className="text-[12px] text-[#a90f21] font-semibold mt-[5%] text-start mb-[1%] mx-[4%]">
                رقم الهاتف
              </Text>
              <View className="flex-row items-center justify-between w-full  bg-[#c5c5c53b] rounded-xl h-[10%] px-[5%]">
                <Icon source={"phone"} color="#a90f21" size={20} />
                <Text className="text-[16px] font-medium">0921438795</Text>
              </View>
              <Text className="text-[12px] text-[#a90f21] font-semibold mt-[5%]  text-start mb-[1%] mx-[4%]">
                المدينة
              </Text>
              <View className="flex-row items-center justify-between w-full  bg-[#c5c5c53b] rounded-xl h-[10%] px-[5%]">
                <Icon source={"city"} color="#a90f21" size={20} />
                <Text className="text-[16px] font-medium">الزاوية</Text>
              </View>
              <Text className="text-[12px] text-[#a90f21] font-semibold mt-[5%]  text-start mb-[1%] mx-[4%]">
                حالة الحساب
              </Text>
              <View className="flex-row items-center justify-between w-full  bg-[#c5c5c53b] rounded-xl h-[10%] px-[5%]">
                <Icon source={"account-check"} color="green" size={20} />
                <Text className="text-[16px] font-medium">
                  نشط
                  <Text className="text-green-700">{"  (متصل)"}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;
