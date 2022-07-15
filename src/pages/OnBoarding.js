import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel from "../component/Carousel";
import { dummyData } from "../data/Data";

const { width, height } = Dimensions.get("window");

const OnBoarding = ({ navigation }) => {
  return (
    <View>
      <View style={styles.carouselContainer}>
        <Carousel data={dummyData} />
      </View>

      {/* 로그인 버튼 시작*/}
      <View style={styles.buttonContainer}>
        {/* 카카오 로그인 버튼 */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { name: "Home" })}
          style={styles.kakaoButton}
        >
          <Text style={styles.buttonAndStartText}>카카오 로그인</Text>
        </TouchableOpacity>

        {/* 구글 로그인 버튼 */}
        <View style={styles.googleButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home", { name: "Home" })}
            style={styles.googleButton}
          >
            <Text style={styles.buttonAndStartText}>Google 로그인</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 계정 없이 시작 touchableOpacity*/}
      <View style={styles.startContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        >
          <Text style={{ ...styles.buttonAndStartText }}>
            계정 없이 시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: height * 0.1,
  },
  buttonContainer: {
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  kakaoButton: {
    backgroundColor: "#FEE500",
    width: width - 60,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  googleButton: {
    backgroundColor: "#FFFF",
    width: width - 60,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAndStartText: {
    fontSize: 18,
  },
  startContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default OnBoarding;
