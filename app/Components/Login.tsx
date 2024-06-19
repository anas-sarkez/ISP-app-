import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Link replace={true} href="/dashboard">
        Go to Dashboard
      </Link>
    </View>
  );
};

export default Login;
