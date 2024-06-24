import { Image, View, Text } from "react-native";
const LogoTitle = () => {
  return (
    <View className="flex-row h-[100px]  justify-around bg-[#fff] w-full  items-start">
      <Image
        source={require("../../assets/images/adaptive-icon-new.png")}
        className=" h-full w-[50%] "
      />
    </View>
  );
};
export default LogoTitle;
