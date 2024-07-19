import { Text, View } from "react-native";
import Login from "./Components/Login";
import { Redirect } from "expo-router";

export default function Index() {
  const user = async () => {
    const res = await fetch("https://isp-server.onrender.com/user", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
  };

  user();

  // return <Login />;
  return Redirect({ href: "/home" });
}
