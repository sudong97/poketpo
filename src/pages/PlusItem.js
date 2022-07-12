import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../../color";

export default function PlusItem({ onCreate, navigation, route, setData }) {
  const [item_name, setItem_Name] = useState("");
  const [memo, setMemo] = React.useState("jisu good");
  const [season, setSeason] = useState("spring");

  //포켓에 넣기 버튼
  const handlesubmit = () => {
    onCreate(item_name, memo, season);
    alert(memo);
    navigation.navigate("Home", { name: "Home" });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.back}>
        <View style={styles.back_button}>
          <Button
            title="<"
            color="black"
            onPress={() => navigation.navigate("Home", { name: "Home" })}
          />
        </View>
        <View style={styles.main}>
          <Text stlye={styles.maintxt}>아이템 등록하기</Text>
        </View>
      </View>

      {/* 아이템 등록  */}
      <View style={styles.item_edit}>
        <Text>아이템</Text>
        <View style={styles.item_item}>
          <View style={styles.item_image}>
            <Image
              style={styles.item_imagee}
              source={require("poketpo2/assets/images/sample_item_image.png")}
            />
          </View>
          <View>
            <TextInput
              multiline
              name="item_name"
              value={item_name}
              onChangeText={setItem_Name}
              style={styles.item_name}
              returnKeyType="done"
            />
          </View>
        </View>
      </View>

      {/* 포켓 선택 */}
      <View style={styles.poket}>
        <Text>포켓</Text>
      </View>

      {/* 계절 항목 */}
      <View style={styles.season}>
        <Text>계절</Text>
        <View style={styles.seasonImage}>
          <TouchableHighlight
            activeOpacity={0.9}
            style={styles.srping_touch}
            underlayColor="green"
            onPress={() => setSeason("spring")}
          >
            <Image
              style={styles.spring}
              source={require("poketpo2/assets/images/spring.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.9}
            style={styles.summer_touch}
            underlayColor="blue"
            onPress={() => setSeason("summer")}
          >
            <Image
              style={styles.summer}
              source={require("poketpo2/assets/images/summer.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.9}
            style={styles.fall_touch}
            underlayColor="orange"
            onPress={() => setSeason("fall")}
          >
            <Image
              style={styles.fall}
              source={require("poketpo2/assets/images/fall.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.9}
            style={styles.winter_touch}
            underlayColor="gray"
            onPress={() => setSeason("winter")}
          >
            <Image
              style={styles.winter}
              source={require("poketpo2/assets/images/winter.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.buyWhy}>
        <Text>왜 샀지</Text>
      </View>
      <View style={styles.memo}>
        <Text>메모</Text>
        <TextInput
          multiline
          name="memo"
          value={memo}
          onChangeText={setMemo}
          style={styles.memoinput}
          returnKeyType="done"
        />
      </View>
      <View style={styles.picture}>
        <Text>사진</Text>
      </View>

      <View style={styles.submitbox}>
        <View style={styles.submit}>
          <Button
            title="포켓에 넣기"
            style={styles.submit_button}
            color="white"
            onPress={handlesubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EAEAEA", padding: 30 },
  back: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
  },
  back_button: { flex: 1 },
  main: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  item_edit: {
    height: 120,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  item_item: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  item_image: {},
  item_imagee: {},
  item_name: {
    backgroundColor: "#EAEAEA",
    padding: 20,
    paddingTop: 16,
    margin: 5,
    marginLeft: 25,
    width: 220,
    height: 50,
    borderRadius: 20,
    color: "black",
  },
  poket: {
    height: 180,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  season: {
    flex: 1,
    height: 120,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  seasonImage: {
    paddingTop: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  spring: { width: 50, height: 50 },
  srping_touch: { borderRadius: 30, padding: 10 },
  summer: { width: 50, height: 50 },
  summer_touch: { borderRadius: 30, padding: 10 },
  fall: { width: 50, height: 50 },
  fall_touch: { borderRadius: 30, padding: 10 },
  winter: { width: 50, height: 50 },
  winter_touch: { borderRadius: 30, padding: 10 },
  buyWhy: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  memo: {
    height: 120,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  memoinput: {
    backgroundColor: "#EAEAEA",
    borderRadius: 30,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  picture: {
    height: 280,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  submitbox: {
    padding: 20,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  submit: {
    height: 60,
    width: 250,
    backgroundColor: "black",
    borderRadius: 30,
    marginVertical: 10,

    padding: 10,
    paddingHorizontal: 30,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  submit_button: { fontSize: 30 },
});
