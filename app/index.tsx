import { Text, View } from "react-native";
import Login from "./Components/Login";
import { Redirect } from "expo-router";

export default function Index() {
  return <Login />;
  // return Redirect({ href: "/data" });
}
