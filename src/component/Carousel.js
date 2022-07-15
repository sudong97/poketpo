import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import CarouselItem from "./CarouselItem";

const { width } = Dimensions.get("window");

const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  return (
    <View>
      {/* Carousel 코드 시작 */}
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} style={{ flex: 3 }} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
      {/* Carousel 코드 시작 */}

      {/* 페이지 구분 돼지코 시작 */}
      <View style={styles.center}>
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
      {/* 페이지 구분 돼지코 끝 */}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  dotView: {
    marginTop: 0,
    flexDirection: "row",
    position: "absolute",
  },
  buttonContainer: {
    marginTop: 75,
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    width: 200,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  textView: {
    bottom: 10,
    margin: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: width - 200,
    height: 40,
  },
  bottomSheetText: {
    color: "black",
    fontSize: 15,
  },
});

export default Carousel;
