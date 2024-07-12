import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { Alert, Linking, Platform, Text, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import * as Location from "expo-location";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Map() {
  const [to, setTo] = useState("towers");

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
    // if (latitude !== 0 && longitude !== 0) {
    //   setPending("success");
    // } else {
    //   setPending("failed");
    // }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View className="h-full w-full bg-[#EDEDED] items-center justify-center">
      <MapView
        mapType="standard"
        customMapStyle={Platform.OS === "android" ? mapCustomStyle : []}
        userInterfaceStyle="dark"
        showsUserLocation={true}
        showsCompass={true}
        showsMyLocationButton={true}
        showsBuildings={true}
        showsIndoors={true}
        showsPointsOfInterest={true}
        showsScale={true}
        userLocationCalloutEnabled={true}
        loadingEnabled={true}
        style={{ flex: 1 }}
        className="h-[100%] w-full"
        initialRegion={{
          latitude: 32.6422,
          longitude: 12.7278,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {to === "towers" && (
          <Marker
            title="Tower 1"
            coordinate={{
              latitude: 32.6122,
              longitude: 12.7278,
            }}
          >
            <Icon size={40} source="radio-tower" color="#7c1e1e"></Icon>
          </Marker>
        )}
        {to === "towers" && (
          <Marker
            title="Tower 2"
            focusable={true}
            coordinate={{
              latitude: 32.6942,
              longitude: 12.6278,
            }}
          >
            <Icon size={40} source="radio-tower" color="#7c1e1e"></Icon>
          </Marker>
        )}
        {to === "towers" && (
          <Marker
            title="Tower 3"
            coordinate={{
              latitude: 32.7912,
              longitude: 12.8278,
            }}
          >
            <Icon size={40} source="radio-tower" color="#7c1e1e"></Icon>
          </Marker>
        )}
        {to === "towers" && (
          <Marker
            title="Tower 4"
            coordinate={{
              latitude: 32.7402,
              longitude: 12.9978,
            }}
          >
            <Icon size={40} source="radio-tower" color="#7c1e1e"></Icon>
          </Marker>
        )}
        {to === "offices" && (
          <Marker
            pinColor="#331919"
            title="Main office"
            coordinate={{
              latitude: 32.750092,
              longitude: 12.752065,
            }}
            onPress={() => {
              setOffceDescription("office 1");
            }}
          >
            <Icon
              size={40}
              source="office-building-marker"
              color="#7c1e1e"
            ></Icon>
          </Marker>
        )}
        {to === "offices" && (
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
          >
            <Icon size={40} source="store-marker" color="#7c1e1e"></Icon>
          </Marker>
        )}
        {to === "offices" && (
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
          >
            <Icon size={40} source="store-marker" color="#7c1e1e"></Icon>
          </Marker>
        )}
        {to === "offices" && (
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
          >
            <Icon size={40} source="store-marker" color="#7c1e1e"></Icon>
          </Marker>
        )}
      </MapView>
      <View className=" w-full items-center absolute left-0 top-[10%]">
        <Text className="text-[30px] font-bold text-[#fff]">
          {to === "towers" ? "Towers" : "Offices"}
        </Text>
      </View>
      <View className="absolute bottom-[7%] mb-20 w-full items-center justify-center">
        <Button
          mode="contained"
          className="bg-[#7c1e1e] w-[40%] rounded-full "
          labelStyle={{ color: "white" }}
          onPress={() => {
            setTo((prev) => {
              return prev === "towers" ? "offices" : "towers";
            });
          }}
        >
          {to === "towers" ? "Offices" : "Towers"}
        </Button>
      </View>
      {pending === "failed" && (
        <View className="absolute bottom-[3%] mb-20 right-2 w-full items-end">
          <Button
            className="bg-[#7c1e1e] rounded-full"
            mode="contained"
            labelStyle={{ color: "white" }}
            onPress={() => {
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
                    text: "Settings",
                    onPress: () => {
                      setPending("refresh");
                      Linking.openSettings();
                      getLocation();
                    },
                  },
                ]
              );

              getLocation();
            }}
          >
            <Icon size={20} source="map-marker-radius" color="white"></Icon>
          </Button>
        </View>
      )}
    </View>
  );
}
const mapCustomStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];
/**  {pending === "pending" ||
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
        )} */
