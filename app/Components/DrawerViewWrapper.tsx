import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { transform } from "@babel/core";

const DrawerViewWrapper = ({ children }: { children: any }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    // style: {
    //   shadowColor: "blue",
    //   shadowOpacity: interpolate(progress.value, [0, 1], [0, 1]),
    //   shadowRadius: interpolate(progress.value, [0, 1], [0, 5]),
    //   shadowOffset: {
    //     width: interpolate(progress.value, [0, 1], [0, -100]) * progress.value,
    //     height: interpolate(progress.value, [0, 1], [0, -100]) * progress.value,
    //   },
    // },
    height: interpolate(progress.value, [0, 1], [-20, 100]),
    transform: [
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.6]),
      },
      {
        translateX: interpolate(progress.value, [0, 1], [0, -50]),
      },
    ] as unknown as {
      scale?: undefined;
      translateY?: undefined;
    } & {
      scale: number;
      translateX: number;
    },
    borderRadius: interpolate(progress.value, [0, 1], [0, 40]),
  }));
  return (
    <Animated.View
      className={"overflow-hidden"}
      style={[styles.container, animatedStyle]}
    >
      {children}
    </Animated.View>
  );
};

export default DrawerViewWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.85,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 2,
    },
  },
});
