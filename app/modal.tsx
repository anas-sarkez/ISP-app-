import { useState } from "react";
import { View, Text, Alert, ScrollViewBase, ScrollView } from "react-native";
import { List, TextInput, Button } from "react-native-paper";
import { packege } from "./Components/packege";
export default function Modal() {
  const [text, setText] = useState("");
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView className="w-full ">
      <View className="items-center justify-center">
        <Text className="text-sm pt-8  text-[#973931]">Card Number</Text>
        <View className="w-[90%] py-3">
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            keyboardAppearance="light"
            value={text}
            onChangeText={setText}
            label="Number"
            outlineStyle={{
              borderColor: "#C0091E",
              borderRadius: 40,
            }}
            secureTextEntry={false}
            activeOutlineColor="#C0091E"
            outlineColor="#C4C4C4"
            placeholderTextColor="#C0091E"
            textColor="#0F0017"
            right={
              <TextInput.Icon color={"#C0091E"} icon="sort-numeric-variant" />
            }
          />
        </View>
        <View className="w-full justify-center items-center mt-6">
          <Text className="text-[16px] font-medium text-[#803d44]">
            Balance: <Text className="font-black ">10.000 LYD</Text>
          </Text>
        </View>
        <View className="w-[100%] py-6  flex-row justify-around">
          <Button
            mode="contained"
            icon="currency-usd"
            className="bg-[#973131] text-white w-[50%] rounded-xl"
            onPress={() => Alert.alert("Submitted")}
          >
            Submit
          </Button>
        </View>

        <View className="w-full justify-center items-center">
          <View className="w-[90%] py-3">
            <View className="w-full justify-center items-center pb-4">
              <Text className="text-[16px] font-medium text-[#803d44]">
                Packages
              </Text>
            </View>
            <List.Accordion
              title="All Packages"
              left={(props) => (
                <List.Icon {...props} icon="package-variant" color="#973131" />
              )}
            >
              {packege().map((item) => (
                <List.Accordion
                  title={item.name}
                  style={{ backgroundColor: "#f0f0f0" }}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="page-next-outline"
                      color="#973131"
                    />
                  )}
                >
                  <View className="w-[100%] border-2 rounded-2xl border-[#973131] flex-col">
                    <View className="w-[100%] -ml-4 flex-row justify-around">
                      <Text className="text-sm pt-4  text-[#973931]">
                        Quota: {item.quota}
                      </Text>
                      <Text className="text-sm pt-4  text-[#973931]">
                        Price: {item.price}
                      </Text>
                    </View>
                    <View className="w-[100%] -ml-4 flex-row justify-around">
                      <Text className="text-sm pt-4  text-[#973931]">
                        Download: {item.speedupLoading}
                      </Text>
                      <Text className="text-sm pt-4  text-[#973931]">
                        Upload: {item.speedupDownload}
                      </Text>
                    </View>
                    <View className=" w-[100%] -ml-4 flex-row justify-around">
                      <Text className="text-sm pt-4  text-[#973931]">
                        Duration: {item.duration}
                      </Text>
                    </View>
                    <View className="w-[100%] py-3 -ml-4 flex-row justify-around">
                      <Button
                        mode="contained"
                        icon="cash-check"
                        className="bg-[#973131] text-white w-[50%] rounded-sm"
                        onPress={() => Alert.alert("Selected")}
                      >
                        Select
                      </Button>
                    </View>
                  </View>
                </List.Accordion>
              ))}
            </List.Accordion>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
