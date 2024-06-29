import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-paper";
import { router } from "expo-router";

const Plane = () => {
  return (
    <ImageBackground
      imageStyle={{ resizeMode: "cover" }}
      className="w-screen bg-center items-center  h-[104%]"
      source={require("../../../assets/images/databg.png")}
    >
      <View className="w-[90%] h-[80%] mt-[23%] bg-transparent justify-center items-center">
        <View
          style={stylesType.box}
          className="font-bold border-2 h-[15%] shadow-2xl text-center w-[90%] items-center rounded-2xl border-[#C4C4C4] bg-[#fff]  m-[8]"
        >
          <Text className="text-[20px] mt-5 text-center font-bold text-[#331919] ">
            Consumed{"  "}
            <Icon size={25} source="chart-line" color="#C0091E"></Icon>
          </Text>
          <Text className="text-[18px] font-semibold   mt-2 text-center  text-[#331919]">
            12.014 GB
          </Text>
        </View>
        <View
          style={stylesType.box}
          className="font-bold  border-2 h-[15%] shadow-2xl text-center w-[90%] rounded-2xl border-[#C4C4C4] bg-[#fff]  m-[8]"
        >
          <Text className="text-[20px] mt-5 text-center font-bold text-[#331919] ">
            Remaining{"  "}
            <Icon size={25} source="chart-donut" color="#C0091E"></Icon>
          </Text>
          <Text className="text-[18px] font-semibold text-center mt-2 text-[#331919]">
            2.014 GB
          </Text>
        </View>
        <View
          style={stylesType.box}
          className="font-bold border-2 shadow-2xl h-[15%]  rounded-2xl border-[#C4C4C4] bg-[#ffffff] w-[90%]  m-[8]"
        >
          <Text className="text-[20px] mt-5 text-center font-bold text-[#331919] ">
            Expiration Date{"  "}
            <Icon size={25} source="calendar-month" color="#C0091E"></Icon>
          </Text>
          <Text className="text-[18px] font-semibold text-center    mt-2 text-[#331919]">
            20/06/2024
          </Text>
        </View>
        <View
          style={stylesType.box}
          className="font-bold border-2 shadow-2xl h-[15%]  rounded-2xl border-[#C4C4C4] bg-[#ffffff] w-[90%]  m-[8]"
        >
          <Text className="text-[20px] mt-5 text-center font-bold text-[#331919]">
            Package Name{"  "}
            <Icon size={25} source="package-variant" color="#C0091E"></Icon>
          </Text>
          <Text className="text-[18px] font-semibold   mt-2 text-center  text-[#331919]">
            Package 1
          </Text>
        </View>
        <Button
          style={stylesType.box}
          icon="database-cog-outline"
          mode="contained"
          className="bg-[#7c1e1e] text-white mt-[10%] w-[60%] rounded-3xl"
          onPress={() => router.push("/modal")}
        >
          Data Plane
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Plane;
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
