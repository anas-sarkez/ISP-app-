import * as React from "react";
import { Dimensions, Text, View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

function InfiniteSlider() {
  const width = Dimensions.get("window").width;
  const fetchedImages = [
    {
      id: 1,
      image: require("../../assets/images/slider/slide1.jpg"),
    },
    {
      id: 2,
      image: require("../../assets/images/slider/slide2.jpg"),
    },
    {
      id: 3,
      image: require("../../assets/images/slider/slide3.jpg"),
    },
    {
      id: 4,
      image: require("../../assets/images/slider/slide4.jpg"),
    },
    {
      id: 5,
      image: require("../../assets/images/slider/slide5.jpg"),
    },
  ];
  const offset = useSharedValue(300);
  return (
    <Carousel
      mode="parallax"
      loop
      width={width}
      height={(9 / 16) * width}
      autoPlay={true}
      data={fetchedImages}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ item }) => (
        <View className="h-full aspect-video p-2" key={item.id}>
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      )}
    />
  );
}

export default InfiniteSlider;
