import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, Text, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import * as Location from "expo-location";

export default function Towers() {
  const [towers, setTowers] = useState(true);
  const [Offices, setOffices] = useState(false);
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [latitude, setLatitude] = useState<number | null>(0);
  const [longitude, setLongitude] = useState<number | null>(0);
  const [offceDescription, setOffceDescription] = useState(
    "Your Current Location"
  );
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const { latitude: coordinatelatitude } = location.coords;
      setLatitude(coordinatelatitude);
      const { longitude } = location.coords;
      setLongitude(longitude);
    })();
  }, [longitude]);

  return (
    <View className="h-full w-full bg-[#fff] items-center justify-center">
      <MapView
        className="h-[60%] w-[95%]"
        initialRegion={{
          latitude: 32.6422,
          longitude: 12.7278,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        <Marker
          pinColor="yellow"
          title="Your Current Location"
          description="Your Current Location Description"
          coordinate={{
            latitude: location.coords?.latitude,
            longitude: location.coords?.longitude,
          }}
        />
        {towers && (
          <Marker
            pinColor="red"
            title="Tower 1"
            coordinate={{
              latitude: 32.6122,
              longitude: 12.7278,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="red"
            title="Tower 2"
            coordinate={{
              latitude: 32.6942,
              longitude: 12.6278,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="red"
            title="Tower 3"
            coordinate={{
              latitude: 32.7912,
              longitude: 12.8278,
            }}
          />
        )}
        {towers && (
          <Marker
            pinColor="red"
            title="Tower 4"
            coordinate={{
              latitude: 32.7402,
              longitude: 12.9978,
            }}
          />
        )}
        {Offices && (
          <Marker
            pinColor="blue"
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
            pinColor="blue"
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
            pinColor="blue"
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
            pinColor="blue"
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
        <Button
          mode="contained"
          className="bg-[#7c1e1e] text-white mt-[10%] w-[35%] rounded-3xl"
          onPress={() => {
            setTowers(true);
            setOffices(false);
          }}
        >
          Towers
        </Button>
        <Button
          mode="contained"
          className="bg-[#7c1e1e] text-white mt-[10%] w-[35%] rounded-3xl"
          onPress={() => {
            setTowers(false);
            setOffices(true);
          }}
        >
          Offices
        </Button>
      </View>
      <View className="h-[10%] w-[100%] items-center  justify-around mt-[10%]">
        <Text>
          longitude {longitude} {"\n"} latitude {latitude}
        </Text>
        <Text>{offceDescription}</Text>
      </View>
    </View>
  );
}
