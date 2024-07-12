import React, { useEffect, useReducer, useRef } from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
} from "react-native";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
import Lottie from "lottie-react-native";
import { Icon } from "react-native-paper";
import { useDrawerStatus } from "@react-navigation/drawer";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();

  // get information about the components position on the screen -----

  const reducer = (state: any, action: { x: number; index: number }) => {
    // Add the new value to the state
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };
  let first = true;

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    // Our code hasn't finished rendering yet, so we can't use the layout values
    if (layout.length !== routes.length && first) {
      first = false;
      return 0;
    }
    // We can use the layout values
    // Copy layout to avoid errors between different threads
    // We subtract 25 so the active background is centered behind our TabBar Components
    // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
    // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
    return [...layout].find(({ index }) => index === activeIndex)!.x - 25;
    // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
    // or the layout changes (e.g. when the components haven't finished rendering yet)
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <View style={[styles.tabBar, { paddingBottom: bottom }]}>
      <AnimatedSvg
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
        width={110}
        height={60}
        fill="none"
        className="h-full"
      >
        <View className="absolute w-[300%] -left-[290%] rounded-xl h-[100px] bg-white"></View>
        <View className="absolute w-[300%] -right-[290%] rounded-xl h-[100px] bg-white"></View>
        <Path
          fill="#fff"
          d="M0 60V0c11.046 0 20 8.954 20 20v10c0 16.569 15.67 30 35 30H0zm90-30c0 16.569-15.67 30-35 30h55V0C98.954 0 90 8.954 90 20v10z"
        />
        <View className="absolute w-[100%] h-[100px] top-[60px] bg-white"></View>
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route: any, index: any) => {
          const active = index === activeIndex;
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              isFocused={isFocused}
              label={label}
              onLayout={(e) => handleLayout(e, index)}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

const TabBarComponent = ({
  active,
  isFocused,
  label,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null);
  const drawerProgress = useDrawerStatus();

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 1, { duration: 250 }),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {label === "menu" ? (
          <Icon
            color={drawerProgress == "open" ? "#ad3939" : "black"}
            source="menu"
            size={30}
            // color={`${isDrawerOpen ? "#C0091E" : "#C4C4C4"}`}
          />
        ) : label === "home" ? (
          <Icon
            color={isFocused && drawerProgress != "open" ? "#ad3939" : "#000"}
            source="home"
            size={30}
          />
        ) : label === "map" ? (
          <Icon
            color={isFocused && drawerProgress != "open" ? "#ad3939" : "#000"}
            source="transmission-tower"
            size={30}
          />
        ) : label === "dashboard" ? (
          <Icon
            color={isFocused && drawerProgress != "open" ? "#ad3939" : "#000"}
            source="chart-bar"
            size={30}
          />
        ) : null}
        <Text
          className="text-[10px]"
          style={
            drawerProgress == "open" && label === "menu"
              ? { color: "#ad3939" }
              : drawerProgress == "closed" && isFocused
              ? { color: "#ad3939" }
              : { color: "black" }
          }
          // {{
          //   color: isFocused && drawerProgress != "open" ? "#ad3939" : "black",
          // }}
        >
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

type TabBarComponentProps = {
  active?: boolean;
  isFocused: boolean;
  label: string;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default AnimatedTabBar;
