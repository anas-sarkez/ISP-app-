import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, Linking, Text, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import * as Location from "expo-location";

export default function Towers() {
  const [towers, setTowers] = useState(true);
  const [Offices, setOffices] = useState(false);
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [offceDescription, setOffceDescription] = useState(
    "Your Current Location"
  );
  const [pending, setPending] = useState("pending");
  console.log(pending);
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      setPending("failed");
      return;
    } else setPending("success");

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    const { latitude: coordinatelatitude } = location.coords;
    setLatitude(coordinatelatitude);
    const { longitude } = location.coords;
    setLongitude(longitude);
    if (latitude !== 0 && longitude !== 0) {
      setPending("success");
    } else {
      setPending("failed");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View className="h-full w-full bg-[#EDEDED] items-center justify-center">
      <View className="h-[10%] w-full items-center justify-center">
        <Text className="text-[24px] mt-10 font-bold text-[#7c1e1e]">
          {!towers ? "Towers" : "Offices"}
        </Text>
      </View>
      <MapView
        className="h-[50%] w-[95%] mt-7"
        style={{ borderRadius: 30 }}
        initialRegion={{
          latitude: 32.6422,
          longitude: 12.7278,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {pending !== "failed" && (
          <Marker
            pinColor="yellow"
            title="Your Current Location"
            description="Your Current Location Description"
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="#7c1e1e"
            title="Tower 1"
            coordinate={{
              latitude: 32.6122,
              longitude: 12.7278,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="#7c1e1e"
            title="Tower 2"
            coordinate={{
              latitude: 32.6942,
              longitude: 12.6278,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="#7c1e1e"
            title="Tower 3"
            coordinate={{
              latitude: 32.7912,
              longitude: 12.8278,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="#7c1e1e"
            title="Tower 4"
            coordinate={{
              latitude: 32.7402,
              longitude: 12.9978,
            }}
          />
        )}
        {Offices && (
          <Marker
            pinColor="#331919"
            title="office 1"
            coordinate={{
              latitude: 32.7122,
              longitude: 12.7278,
            }}
            onPress={() => {
              setOffceDescription("office 1");
            }}
          />
        )}
        {Offices && (
          <Marker
            pinColor="#331919"
            title="Office 2"
            coordinate={{
              latitude: 32.5942,
              longitude: 12.6208,
            }}
            onPress={() => {
              setOffceDescription("office 2");
            }}
          />
        )}
        {Offices && (
          <Marker
            pinColor="#331919"
            title="Office 3"
            coordinate={{
              latitude: 32.6912,
              longitude: 12.8278,
            }}
            onPress={() => {
              setOffceDescription("office 3");
            }}
          />
        )}
        {Offices && (
          <Marker
            pinColor="#331919"
            title="Office 4"
            coordinate={{
              latitude: 32.5402,
              longitude: 12.5978,
            }}
            onPress={() => {
              setOffceDescription("office 4");
            }}
          />
        )}
      </MapView>
      <View className="h-[10%] w-[100%] items-center flex-row justify-around">
        {/* <Button
          mode="contained"
          className="bg-[#7c1e1e] text-white mt-[10%] w-[35%] rounded-3xl"
          onPress={() => {
            setTowers(true);
            setOffices(false);
          }}
        >
          Towers
        </Button> */}
        <Button
          mode="contained"
          labelStyle={{ color: "white" }}
          className="bg-[#7c1e1e] text-white mt-[10%] w-[35%] rounded-3xl"
          onPress={() => {
            setTowers((prev) => !prev);
            setOffices((prev) => !prev);
          }}
        >
          {!towers ? "Towers" : "Offices"}
        </Button>
      </View>
      {pending === "pending" ||
        (pending === "success" && (
          <View className="h-[10%] w-[100%] items-center  justify-around mt-[10%]"></View>
        ))}

      {(pending === "failed" || pending === "refresh") && (
        <View className="h-[10%] w-[100%] items-center  justify-around mt-[10%]">
          <Text className="text-red-500 font-[24px] text-center">
            You need to allow location permission {"\n"} to see your location.
          </Text>
          <Button
            mode="contained"
            labelStyle={{ color: "white" }}
            className="bg-[#7c1e1e] text-white  w-[35%] rounded-3xl"
            onPress={async () => {
              if (pending == "failed") {
                Alert.alert(
                  "Failed to get Location",
                  "Do you want to try again?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => {
                        setPending("failed");
                      },
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () => {
                        setPending("refresh");
                        Linking.openSettings();
                      },
                    },
                  ]
                );
              } else {
                getLocation();
              }
            }}
          >
            {pending === "refresh" ? "Refresh" : "open Settings"}
          </Button>
        </View>
      )}
    </View>
  );
}
