import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Linking from "expo-linking";

let backImagePath = require("../../assets/images/eva_arrow-ios-back-outline.png");
let editImagePath = require("../../assets/images/eva_edit-fill.png");
const { width, height } = Dimensions.get("window");

// 링크의 경우, 안드로이드 / 아이폰 각각 따로 설정하기
const link = () => {
  Linking.openURL(
    "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-kr-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700059428762692_creativeid_485711635101_device_c&gclid=CjwKCAjw2rmWBhB4EiwAiJ0mtdiXCB8o3xEQfNV1AO9O4w1y-DFfH95qVqqH-pKO7At38pQSzEatGRoC4PIQAvD_BwE&gclsrc=aw.ds"
  );
};

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { name: "Home" })}
          style={styles.backButtonContainer}
        >
          <Image
            style={{ height: width * 0.075, width: width * 0.075 }}
            source={backImagePath}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>설정</Text>
        </View>
      </View>

      <View style={styles.profile}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80",
          }}
          style={styles.profileImage}
        />
        <View style={styles.nickNameContainer}>
          <Text style={styles.boldText}>나냐아</Text>

          <TouchableOpacity style={styles.editNickname}>
            <Image style={{ height: 24, width: 24 }} source={editImagePath} />
          </TouchableOpacity>
        </View>
        <Text style={styles.smallgraytext}>xxx@gmail.com</Text>
        <View style={styles.registerContainer}>
          <Text style={styles.boldText}>등록한 옷</Text>
          <View style={{ ...styles.center, marginTop: 3 }}>
            <Text style={styles.smallgraytext}>100개</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        {/* 버튼1 */}
        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => {
            navigation.navigate("EditHome", { name: "EditHome" });
          }}
        >
          <Text style={styles.settingButtonText}>홈화면 편집하기</Text>
        </TouchableOpacity>

        {/* 버튼2 */}

        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => {
            navigation.navigate("Backup", { name: "Backup" });
          }}
        >
          <Text style={styles.settingButtonText}>백업/복원하기</Text>
        </TouchableOpacity>

        {/* 버튼3 */}

        <TouchableOpacity style={{ ...styles.settingButton, marginTop: 40 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.settingButtonText}>버전 정보</Text>
            <View style={{ marginLeft: width * 0.4 }}>
              <Text style={styles.boldText}>v1.0.0</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* 버튼4 */}
        <TouchableOpacity style={styles.settingButton} onPress={() => link()}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.settingButtonText}>B9B 응원하러 가기</Text>
            <View style={{ marginLeft: width * 0.15 }}>
              <Text style={styles.boldText}>별점 남기기</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* 온보딩으로 돌아가기: 나중에 지울 것 */}
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("OnBoarding", { name: "OnBoarding" })
            }
            style={{
              backgroundColor: "white",
              width: width - 60,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text>온보딩으로 돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroudColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    marginTop: 50,
    width: width - 50,
    flexDirection: "row",
  },
  backButtonContainer: {
    height: width * 0.075,
    width: width * 0.075,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginLeft: 10,
    height: width * 0.075,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 21,
    fontWeight: "700",
  },
  profile: {
    flex: 4,
    width: width - 70,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  nickNameContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 48,
    marginTop: 8,
    height: 28,
  },
  boldText: {
    fontSize: 19,
    fontWeight: "600",
  },
  editNickname: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 28,
    height: 28,
    marginLeft: 20,
  },
  smallgraytext: {
    fontSize: 11,
    color: "gray",
  },
  registerContainer: {
    marginTop: 20,
    marginRight: 170,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 7,
    width: width,
    paddingTop: 20,
    alignItems: "center",
  },
  settingButton: {
    marginBottom: 20,
    backgroundColor: "#ffff",
    width: width - 60,
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 25,
    borderRadius: 17,
  },
  settingButtonText: {
    fontSize: 19,
  },
  marginContainer: {
    height: height * 0.2,
  },
});

export default Setting;
