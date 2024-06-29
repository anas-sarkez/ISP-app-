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
    style: {
      shadowColor: "blue",
      shadowOpacity: interpolate(progress.value, [0, 1], [0, 1]),
      shadowRadius: interpolate(progress.value, [0, 1], [0, 5]),
      shadowOffset: {
        width: interpolate(progress.value, [0, 1], [0, -100]),
        height: interpolate(progress.value, [0, 1], [0, -100]),
      },
    },
    transform: [
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.75]),
      },
      {
        translateX: interpolate(progress.value, [0, 1], [0, -50]),
      },
    ] as unknown as {
      rotate?: undefined;
      rotateX?: undefined;
      rotateY?: undefined;
      rotateZ?: undefined;
      scale?: undefined;
      scaleX?: undefined;
      scaleY?: undefined;
      translateX?: undefined;
      translateY?: undefined;
      skewX?: undefined;
      skewY?: undefined;
      matrix?: undefined;
    } & {
      scale: number;
      translateX: number;
    },
    borderRadius: interpolate(progress.value, [0, 1], [0, 15]),
  }));
  return (
    <Animated.View
      className={"overflow-hidden"}
      style={[styles.container, animatedStyle, styles.box]}
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
