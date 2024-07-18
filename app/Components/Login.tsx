import { View, Platform, Image, StatusBar, Alert } from "react-native";
import React, { createRef, useEffect, useRef, useState } from "react";
import { Link, Redirect, useRouter } from "expo-router";
import { Checkbox, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as localAuthentication from "expo-local-authentication";

const Login = () => {
  // return Redirect({ href: "/home" });
  const [checked, setChecked] = useState<
    "unchecked" | "checked" | "indeterminate"
  >("unchecked");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordTextInput = useRef<any>();
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const myUsername = "shibo";
  const myPassword = "s";

  const router = useRouter();

  const handleSignIn = () => {
    if (username === "" || password === "") {
      Alert.alert("username or password is empty");
      // router.replace("/home");
      return;
    } // U need to replace this with return;
    if ((username === myUsername || "anas") && (myPassword === password || "a"))
      router.replace("/home");
    else {
      Alert.alert("Wrong username or password");
      return;
    }
  };
  // useEffect(() => {
  //   (async () => {
  //     const compatible = await localAuthentication.hasHardwareAsync();
  //     setIsBiometricSupported(compatible);
  //   })();
  // }, []);
  const authenticateUser = async () => {
    try {
      const authenticationResult = await localAuthentication.authenticateAsync({
        promptMessage: "Log in to Sela",
      });

      if (authenticationResult.success) {
        setIsAuthenticated(true);
        await AsyncStorage.setItem("authenticationStatus", "authenticated");
        router.replace("/home");
      }

      console.log(authenticationResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("my-key");
        const state: "unchecked" | "checked" | "indeterminate" =
          value === "checked" ||
          value === "unchecked" ||
          value === "indeterminate"
            ? value
            : "unchecked";
        if (value !== null) {
          if (value === "checked") {
            await AsyncStorage.setItem("my-key", "unchecked");
          }

          setChecked(state);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (isBiometricSupported) authenticateUser();
  }, [isBiometricSupported]);
  return (
    <View className="bg-white h-[98%] ">
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <SafeAreaView
        mode="margin"
        className="h-screen bg-white w-full flex justify-around items-center"
      >
        <View className="w-full h-[90%] flex-col justify-start items-center">
          <Image
            source={require("../../assets/images/home_logo.png")}
            className=" w-[75%] h-[32%]"
          />
          <View className="w-full  h-[70%] -mt-[22%] justify-center items-center ">
            <TextInput
              mode="outlined"
              label="Username"
              placeholder="MyUsername"
              className="bg-white mb-7 w-[80%]"
              activeOutlineColor="#C0091E"
              outlineColor="#C4C4C4"
              placeholderTextColor="#C4C4C4"
              textColor="#0F0017"
              autoCapitalize="none"
              value={username}
              onChangeText={(e) => setUsername(e)}
              onEndEditing={() => passwordTextInput.current?.focus()}
            />
            <TextInput
              mode="outlined"
              label="Password"
              placeholder=" ************"
              className="bg-white  mb-12 w-[80%]"
              activeOutlineColor="#C0091E"
              outlineColor="#C4C4C4"
              placeholderTextColor="#C4C4C4"
              textColor="#0F0017"
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              value={password}
              onChangeText={(e) => setPassword(e)}
              ref={(input: any) => {
                passwordTextInput.current = input;
              }}
            />
            <Button
              onPress={handleSignIn}
              mode="elevated"
              className="disabled:border  mb-4 w-[40%] disabled:bg-red-500 disabled:border-[#C4C4C4] disabled:text-red-500"
              buttonColor="#0F0017"
              textColor="white"
            >
              Sign in
            </Button>
            <Checkbox.Item
              mode={Platform.select({ ios: "ios", android: "android" })}
              labelStyle={{ color: "#0F0017", paddingLeft: 15 }}
              label="Remember Me"
              status={checked}
              style={{ backgroundColor: "white" }}
              onPress={(e) => {
                setChecked((prev) => {
                  const next = prev === "unchecked" ? "checked" : "unchecked";
                  (async () => {
                    try {
                      await AsyncStorage.setItem("my-key", next);
                    } catch (e) {
                      console.log(e);
                    }
                  })();
                  return next;
                });
              }}
              uncheckedColor="#0F0017"
              color="#C0091E"
            />
            <Button
              onPress={authenticateUser}
              mode="elevated"
              className="disabled:border mt-12 mb-4 w-[50%] disabled:bg-red-500 disabled:border-[#C4C4C4] disabled:text-red-500"
              buttonColor="#0F0017"
              textColor="white"
              labelStyle={{ color: "#fff", width: "100%" }}
            >
              Log in with Biometric
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
21;
