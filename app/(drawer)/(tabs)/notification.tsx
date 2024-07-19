import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import notificationArray from "../../helpers/notificationArray";
import { Icon } from "react-native-paper";
const Notification = ({
  item: { id, title, body, date },
  opened,
  setOpened,
}: {
  opened: number;
  setOpened: React.Dispatch<React.SetStateAction<number>>;
  item: { id: number; title: string; body: string; date: Date };
}) => {
  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.7}
      onPress={() => {
        if (opened === id) setOpened(-1);
        else setOpened(id);

        // Alert.alert(item.title, item.body, [
        //   {
        //     text: "OK",
        //     style: "destructive",
        //   },
        // ]);
      }}
      className={`w-[99%] ${
        opened === id ? "full  " : "h-[100px]  relative"
      } bg-white overflow-hidden border-2 border-[#ff000009]  rounded-2xl  m-[5] shadow-2xl`}
    >
      <Text className="text-[20px] ml-[8%]  mt-5 text-start font-bold text-[#6e6c6c] ">
        {title}
      </Text>
      <View className="w-[70%]  items-start ml-[2%]">
        <Text
          style={{ fontWeight: "900", fontVariant: ["small-caps"] }}
          className="text-[25px] my-[3%] text-left ml-[8%]  text-[#331919]"
        >
          {opened !== id ? body.slice(0, 15) + "..." : body}
        </Text>
      </View>
      <View className="absolute top-4 right-[5%] items-center">
        <Icon size={70} source={require("../../../assets/images/sela.png")} />
      </View>
    </TouchableOpacity>
  );
};
const notifications = () => {
  const [opened, setOpened] = useState(-1);
  return (
    <View className="flex-1 bg-[#f2f2f2]">
      <View className="bg-white justify-end pb-[5%] items-center h-[13%]">
        <Text className="text-2xl font-bold">Notification</Text>
      </View>
      <View className="w-[100%] h-[80%] items-center justify-start bg-[#f2f2f2]">
        {notificationArray.length < 1 ? (
          <View className="w-[100%] h-[100%] items-center justify-center bg-[#f2f2f2]">
            <Text className="text-2xl mb-10 font-bold">
              your notifications will appear here
            </Text>
            <Icon size={90} source="bell-off-outline" />
          </View>
        ) : (
          <View className="w-[100%] h-[95.5%] items-center justify-center bg-[#f2f2f2]">
            <ScrollView className="w-[100%]  h-[90%] bg-[#f2f2f2]">
              {notificationArray.map((item) => (
                <Notification
                  opened={opened}
                  setOpened={setOpened}
                  key={item.id}
                  item={item}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

export default notifications;
