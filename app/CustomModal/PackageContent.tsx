import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, List } from "react-native-paper";
import { confirm } from "../helpers/confirm";
import { packege } from "../helpers/packege";

import * as Notifications from "expo-notifications";
import useStore from "../store/store";
const PackageContent = ({ setModalOpen }: any) => {
  const [text, setText] = useState("");
  // const [expanded, setExpanded] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(packege.limited[1]);
  // const handlePress = () => setExpanded(!expanded);
  const [valid, setValid] = useState(false);
  const balance = useStore((state) => state.balance);
  const decBalance = useStore((state) => state.decBalance);
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  return (
    <View
      onStartShouldSetResponder={(event) => true}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      className="w-full h-[88%] rounded-t-3xl bg-[#fff] "
    >
      <View
        onTouchEnd={() => setModalOpen(false)}
        className="w-[95%] mt-[5%] mb-1 border-b-2 bg-[#ffffff] border-[#1D1D2E]"
      >
        <Text className="text-[20px] py-[3%] text-center  font-bold text-[#1D1D2E]">
          Package manager
        </Text>
      </View>
      <ScrollView>
        <View className="w-full flex-row justify-center items-center mt-[16%]">
          <View className="w-[75%]  justify-between items-center">
            <Text className="text-[18px] font-bold text-[#1D1D2E]">
              Current Package:{" "}
              <Text className="font-semibold ">
                {selectedPackage.name},
                <Text className={valid ? "text-green-500" : "text-red-500"}>
                  {" "}
                  {valid ? "valid" : "expired"}
                </Text>
              </Text>
            </Text>
            <Button
              style={stylesType.box}
              labelStyle={{ color: "white" }}
              mode="contained"
              icon="autorenew"
              className="bg-[#1D1D2E] text-white mt-[9%] w-[70%] rounded-xl"
              onPress={async () => {
                if (valid) {
                  Alert.alert(
                    "Valid Package",
                    "You already have a valid package."
                  );
                  return;
                } else {
                  if (selectedPackage.price > balance) {
                    Alert.alert(
                      "Insufficient Balance",
                      "You don't have enough balance to renew the package."
                    );
                    return;
                  } else {
                    const shouldContinue = await confirm(
                      "Renew Package🔂",
                      "Do you want to renew current package?"
                    );
                    if (shouldContinue) {
                      setValid(true);
                      decBalance(selectedPackage.price);
                      await Notifications.scheduleNotificationAsync({
                        content: {
                          title: "Success ✅",
                          body: "Package Renewed",
                          data: {
                            data: "goes here",
                            test: { test1: "more data" },
                          },
                        },
                        trigger: { seconds: 0.1 },
                      });
                    }
                    if (!shouldContinue) {
                      return;
                    }
                  }
                }
              }}
            >
              Renew Package
            </Button>
          </View>
        </View>
        <View className="w-full justify-center pt-[3%] items-center">
          <View className="w-[90%] py-3">
            <Text className="text-[14px] mt-[9%] text-left font-medium text-[#C0091E]">
              Change package
            </Text>
          </View>

          <View className="w-[90%] py-3">
            <View className="w-full">
              <List.Accordion
                title=" Limited Package"
                style={{
                  backgroundColor: "#fff",
                  borderBottomWidth: 1,
                  borderColor: "#C0091E",
                  width: "100%",
                }}
                titleStyle={{ color: "#1D1D2E", textAlign: "left" }}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon="car-speed-limiter"
                    color="#C0091E"
                  />
                )}
              >
                {packege.limited.map((item, index) => (
                  <List.Accordion
                    key={index}
                    style={{ backgroundColor: "#fff" }}
                    title={item.name}
                    titleStyle={{ color: "#1D1D2E" }}
                    left={(props) => (
                      <List.Icon
                        {...props}
                        icon="page-next-outline"
                        color="#C0091E"
                      />
                    )}
                  >
                    <View
                      style={stylesType.box}
                      className="w-[100%] border-2 bg-[#fff] rounded-xl my-2 border-[#C4C4C4] flex-col"
                    >
                      <View className="w-[100%] -ml-4 flex-row justify-around">
                        <Text className="text-sm pt-4  text-[#1D1D2E]">
                          Quota: {item.quota}
                        </Text>
                        <Text className="text-sm pt-4  text-[#1D1D2E]">
                          Price: {item.price} LYD
                        </Text>
                      </View>
                      <View className="w-[100%] -ml-4 flex-row justify-around">
                        <Text className="text-sm pt-4  text-[#1D1D2E]">
                          Download: {item.speedupLoading}
                        </Text>
                        <Text className="text-sm pt-4  text-[#1D1D2E]">
                          Upload: {item.speedupDownload}
                        </Text>
                      </View>
                      <View className=" w-[100%] -ml-4 flex-row justify-around">
                        <Text className="text-sm pt-4  text-[#1D1D2E]">
                          Duration: {item.duration} days
                        </Text>
                      </View>
                      <View className="w-[100%] py-3 -ml-4 flex-row justify-around">
                        <Button
                          style={stylesType.box}
                          labelStyle={{ color: "white" }}
                          mode="contained"
                          icon="cash-check"
                          className={`${
                            balance >= item.price
                              ? "bg-[#1D1D2E]"
                              : "bg-[#9e9999]"
                          } text-white w-[50%]  rounded-lg`}
                          onPress={async () => {
                            let massage =
                              "Change Package to" + item.name + "❔";
                            let title = "confirmation";
                            if (item.name != selectedPackage.name && valid)
                              massage =
                                "You will lose your current Active package❗";
                            if (item.name != selectedPackage.name && !valid) {
                              title = "confirmation";
                              massage = "Change Package to" + item.name + "❔";
                            }
                            title = "Warning ⚠️";

                            if (balance >= item.price) {
                              const shouldContinue = await confirm(
                                title,
                                massage
                              );
                              if (shouldContinue) {
                                setSelectedPackage(item);
                                setValid(true);
                                Alert.alert(
                                  "Success",
                                  "Package changed successfully!"
                                );
                                decBalance(item.price);
                              } else return;
                            }
                            if (balance < item.price) {
                              Alert.alert("Error", "Insufficient balance!");
                              return;
                            }
                          }}
                        >
                          Select
                        </Button>
                      </View>
                    </View>
                  </List.Accordion>
                ))}
              </List.Accordion>
            </View>
            <List.Accordion
              title="Unlimited Package"
              style={{
                backgroundColor: "#fff",
                borderBottomWidth: 1,
                borderColor: "#C0091E",
              }}
              titleStyle={{ color: "#1D1D2E", textAlign: "left" }}
              left={(props) => (
                <List.Icon {...props} icon="infinity" color="#C0091E" />
              )}
            >
              {packege.unlimited.map((item, index) => (
                <List.Accordion
                  key={index}
                  style={{ backgroundColor: "#fff", borderRadius: 12 }}
                  title={item.name}
                  titleStyle={{ color: "#1D1D2E" }}
                  rippleColor={"#C00e1E1f"}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="page-next-outline"
                      color="#C0091E"
                    />
                  )}
                >
                  <View
                    style={stylesType.box}
                    className="w-[100%] border-2 bg-[#fff] rounded-xl my-2 border-[#C4C4C4] flex-col"
                  >
                    <View className="w-[100%] -ml-4 flex-row justify-around">
                      <Text className="text-sm pt-4  text-[#1D1D2E]">
                        Quota: {item.quota}
                      </Text>
                      <Text className="text-sm pt-4  text-[#1D1D2E]">
                        Price: {item.price} LYD
                      </Text>
                    </View>
                    <View className="w-[100%] -ml-4 flex-row justify-around">
                      <Text className="text-sm pt-4  text-[#1D1D2E]">
                        Download: {item.speedupLoading}
                      </Text>
                      <Text className="text-sm pt-4  text-[#1D1D2E]">
                        Upload: {item.speedupDownload}
                      </Text>
                    </View>
                    <View className=" w-[100%] -ml-4 flex-row justify-around">
                      <Text className="text-sm pt-4  text-[#1D1D2E]">
                        Duration: {item.duration} days
                      </Text>
                    </View>
                    <View className="w-[100%] py-3 -ml-4 flex-row justify-around">
                      <Button
                        style={stylesType.box}
                        labelStyle={{ color: "white" }}
                        mode="contained"
                        icon="cash-check"
                        className={`${
                          balance >= item.price
                            ? "bg-[#1D1D2E]"
                            : "bg-[#9e9999]"
                        } text-white w-[50%]  rounded-lg`}
                        onPress={async () => {
                          let massage = "Change Package to" + item.name + "❔";
                          let title = "confirmation";
                          if (item.name != selectedPackage.name && valid)
                            massage =
                              "You will lose your current Active package❗";
                          if (item.name != selectedPackage.name && !valid) {
                            title = "confirmation";
                            massage = "Change Package to" + item.name + "❔";
                          }
                          title = "Warning ⚠️";

                          if (balance >= item.price) {
                            const shouldContinue = await confirm(
                              title,
                              massage
                            );
                            if (shouldContinue) {
                              setSelectedPackage(item);
                              setValid(true);
                              Alert.alert(
                                "Success",
                                "Package changed successfully!"
                              );
                              decBalance(item.price);
                            } else return;
                          }
                          if (balance < item.price) {
                            Alert.alert("Error", "Insufficient balance!");
                            return;
                          }
                        }}
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
      </ScrollView>
    </View>
  );
};
export default PackageContent;
const styles = StyleSheet.create({
  box: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.7,
    shadowRadius: 1.3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
const stylesType: StyleSheet.NamedStyles<any> = styles;
