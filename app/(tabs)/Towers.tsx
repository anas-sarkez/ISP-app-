import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Towers = () => {
  const router = useRouter();
  return (
    <View className="bg-white items-center justify-center p-4">
      <Text
        onPress={() => router.replace("/")}
        className="border border-[#C0091E] p-2"
      >
        Sign out
      </Text>
    </View>
  );
};

export default Towers;
