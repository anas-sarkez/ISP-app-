import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  StatusBar,
  Appearance,
} from "react-native";
import React, { createRef, useRef, useState } from "react";
import { Link, useRouter } from "expo-router";
import { Checkbox, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [checked, setChecked] = useState<
    "unchecked" | "checked" | "indeterminate"
  >("unchecked");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordTextInput = useRef<any>();

  const myUsername = "shibo";
  const myPassword = "s";

  const router = useRouter();

  const handleSignIn = () => {
    if (username === "" || password === "") return;
    if (username === myUsername && myPassword === password)
      router.replace("/dashboard");
  };

  return (
    <ScrollView className="bg-white">
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <SafeAreaView
        mode="margin"
        className="h-screen bg-white justify-self-end self-end bottom-0 w-full flex justify-around items-center"
      >
        <Image
          source={require("../../assets/images/home_logo.png")}
          className="w-full h-60"
        />

        <TextInput
          mode="outlined"
          label="Username"
          placeholder="MyUsername"
          className="bg-white w-[80%]"
          activeOutlineColor="#C0091E"
          outlineColor="#C4C4C4"
          placeholderTextColor="#C4C4C4"
          textColor="#0F0017"
          autoCapitalize="none"
          value={username}
          onChangeText={(e) => setUsername(e)}
          onEndEditing={() => passwordTextInput.current?.focus()}
          left={<TextInput.Icon icon="account-circle" color="#0F0017" />}
        />

        <TextInput
          mode="outlined"
          label="Password"
          placeholder=" ************"
          className="bg-white w-[80%]"
          activeOutlineColor="#C0091E"
          outlineColor="#C4C4C4"
          placeholderTextColor="#C4C4C4"
          textColor="#0F0017"
          autoCapitalize="none"
          value={password}
          onChangeText={(e) => setPassword(e)}
          ref={(input: any) => {
            passwordTextInput.current = input;
          }}
          left={<TextInput.Icon icon="form-textbox-password" color="#0F0017" />}
        />
        <Button
          onPress={handleSignIn}
          mode="elevated"
          className="disabled:border disabled:bg-red-500 disabled:border-[#C4C4C4] disabled:text-red-500"
          buttonColor="#0F0017"
          textColor="white"
        >
          Sign in
        </Button>
        <Checkbox.Item
          mode={Platform.select({ ios: "ios", android: "android" })}
          label="Keep me signed in"
          status={checked}
          onPress={(e) =>
            setChecked((prev) =>
              prev === "unchecked" ? "checked" : "unchecked"
            )
          }
          uncheckedColor="#0F0017"
          color="#0F0017"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
