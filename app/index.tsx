import { Text, View } from "react-native";
import Login from "./Components/Login";
import { PaperProvider } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}
