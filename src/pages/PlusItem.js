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
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import PlusItem_Header from "../component/PlusItem_Header";
import PlusItem_Item from "../component/PlusItem_Item";
import SeasonItem from "../component/SeasonItem";
import PlusItem_PoketSelect from "../component/PlusItem_PoketSelect";

export default function PlusItem({ onCreate, navigation }) {
  const [item_name, setItem_Name] = useState("");
  const [memo, setMemo] = React.useState("jisu good");
  const [season, setSeason] = useState("spring");
  const [poket, setPoket] = useState("최애탬");

  const handleSeasonClick = (season) => {
    setSeason(season);
  };

  const handlePoketClick = (poket) => {
    setPoket(poket);
  };

  //포켓에 넣기 버튼
  const handlesubmit = () => {
    onCreate(item_name, memo, season, poket);
    alert(memo);
    navigation.navigate("Home", { name: "Home" });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.back}>
        <PlusItem_Header navigation={navigation} />
      </View>

      {/* 아이템 등록  */}
      <View>
        <PlusItem_Item
          navigation={navigation}
          item_name={item_name}
          setItem_Name={setItem_Name}
        />
      </View>

      {/* 포켓 선택 */}
      <View style={styles.poket}>
        <View style={styles.poketHed}>
          <Text>포켓</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditPoket", { name: "EditPoket" })
            }
          >
            <Image source={require("../../assets/images/editMark.png")} />
          </TouchableOpacity>
        </View>

        <View>
          <PlusItem_PoketSelect
            poket={"최애탬"}
            onPress={handlePoketClick}
            isSelected={poket === "최애탬"}
          />
          <PlusItem_PoketSelect
            poket={"고민고민"}
            onPress={handlePoketClick}
            isSelected={poket === "고민고민"}
          />
          <PlusItem_PoketSelect
            poket={"마요르카"}
            onPress={handlePoketClick}
            isSelected={poket === "마요르카"}
          />
        </View>
      </View>

      {/* 계절 항목 */}
      <View style={styles.season}>
        <Text>계절</Text>
        <View style={styles.seasonbox}>
          <View>
            <SeasonItem
              season={"spring"}
              onPress={handleSeasonClick}
              isSelected={season === "spring"}
            />
          </View>
          <View>
            <SeasonItem
              season={"summer"}
              onPress={handleSeasonClick}
              isSelected={season === "summer"}
            />
          </View>
          <View>
            <SeasonItem
              season={"fall"}
              onPress={handleSeasonClick}
              isSelected={season === "fall"}
            />
          </View>
          <View>
            <SeasonItem
              season={"winter"}
              onPress={handleSeasonClick}
              isSelected={season === "winter"}
            />
          </View>
        </View>
      </View>

      {/* 왜 샀지 테그 항목 */}
      <View style={styles.buyWhy}>
        <Text>왜 샀지</Text>
      </View>

      {/* 메모 */}
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
        <Button
          title="사진 추가하기"
          onPress={() => navigation.navigate("Picture", { name: "Picture" })}
        />
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
  poket: {
    height: 220,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  poketHed: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
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
  seasonbox: { flexDirection: "row" },
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
