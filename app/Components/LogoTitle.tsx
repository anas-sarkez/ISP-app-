import { Image, View } from "react-native";
const LogoTitle = () => {
  return (
    <Image
      source={require("../../assets/images/logo_landscape.png")}
      className="border border-blue-500 w-screen h-32 bg-white"
    />
  );
};
export default LogoTitle;
