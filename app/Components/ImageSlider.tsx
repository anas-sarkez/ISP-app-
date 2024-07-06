import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";

const ImageSlider = () => {
  const screenWidth =
    Dimensions.get("window").width - Dimensions.get("window").width * 0.1;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const flatListRef = useRef<FlatList<{ image: any; id: any }>>(null);
  const images = [
    {
      id: 1,
      image: require("../../assets/images/slider/slide1.avif"),
    },
    {
      id: 2,
      image: require("../../assets/images/slider/slide2.avif"),
    },
    {
      id: 3,
      image: require("../../assets/images/slider/slide3.avif"),
    },
    {
      id: 4,
      image: require("../../assets/images/slider/slide4.avif"),
    },
    {
      id: 5,
      image: require("../../assets/images/slider/slide4.avif"),
    },
  ];
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === images.length - 1) {
        flatListRef.current?.scrollToIndex({ index: 0, animated: true });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  const renderDots = () => {
    return images.map((dot, index) => {
      if (index === activeIndex) {
        return (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#C0091E",
              marginHorizontal: 5,
            }}
          />
        );
      } else {
        return (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#f2f2f0",
              marginHorizontal: 5,
            }}
          />
        );
      }
    });
  };
  const renderItem = ({ item }: { item: { image: any; id: any } }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ width: screenWidth, height: 200 }}
        />
      </View>
    );
  };

  return (
    <View className="items-center justify-center ">
      <FlatList
        data={images}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        getItemLayout={(data, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
        pagingEnabled={true}
        onScroll={(e) => {
          const position = e.nativeEvent.contentOffset.x;
          const index = Math.floor(position / screenWidth);
          setActiveIndex(index);
        }}
      />
      <View className="flex-row absolute bottom-[18%] right-[38%] ">
        {renderDots()}
      </View>
    </View>
  );
};

export default ImageSlider;
