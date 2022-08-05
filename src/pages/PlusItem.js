import { StatusBar } from "expo-status-bar";
import axios from "axios";

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
import React, { useState, useRef, useEffect } from "react";

import PlusItem_Header from "../component/PlusItem_Header";
import PlusItem_Item from "../component/PlusItem_Item";
import SeasonItem from "../component/SeasonItem";
import TagItem from "../component/TagItem";
import PlusItem_PoketSelect from "../component/PlusItem_PoketSelect";

export default function PlusItem({ onCreate, navigation }) {
  const [item_name, setItem_Name] = useState("");
  const [memo, setMemo] = React.useState("jisu good");
  const [finalSeasonArray, setFinalSeasonArray] = useState([]);
  const [poket, setPoket] = useState("최애탬");

  const [season, setSeason] = useState({
    spring: { id: 1, select: false, name: "봄" },
    summer: { id: 2, select: false, name: "여름" },
    fall: { id: 3, select: false, name: "가을" },
    winter: { id: 4, select: false, name: "겨울" },
  });
  let copySeasonObject = { ...season };

  const [tagData, setTagData] = useState([
    { title: "입으면 완전 편해", id: 1, select: false },
    { title: "핏이 예뻐", id: 2, select: false },
    { title: "색이 찰떡", id: 3, select: false },
    { title: "필요해서", id: 4, select: false },
    { title: "세일 득템", id: 5, select: false },
    { title: "코디하기 좋아서", id: 6, select: false },
    { title: "휘뚜루마뚜루", id: 7, select: false },
    { title: "재질이 좋아서", id: 8, select: false },
    { title: "그냥", id: 9, select: false },
    { title: "유튜브 보고", id: 10, select: false },
  ]);
  let copyTagData = [...tagData];

  const [finalTagArray, setFinalTagArray] = useState([]);
  const [text, setText] = useState("");
  const tagDataId = useRef(Object.keys(tagData).length + 1);

  //계절 클릭 감지
  const handleSeasonClick = (seasonValue) => {
    copySeasonObject[seasonValue]["select"] =
      !copySeasonObject[seasonValue]["select"];
    console.log("copySeasonObject", copySeasonObject);
    setSeason(copySeasonObject);
    setFinalSeasonArray(
      Object.keys(season).filter((item) => season[item]["select"] === true)
    );
  };

  //포켓에 넣기 버튼
  const handlesubmit = () => {
    onCreate(item_name, memo, poket, finalSeasonArray, finalTagArray);
    alert(memo);
    navigation.navigate("Home", { name: "Home" });
  };

  //태그 생성 함수
  const onCreateTag = (title) => {
    const newTag = { title, id: tagDataId.current, select: false };
    tagDataId.current += 1;
    setTagData([...tagData, newTag]);
    setTagSelect([...tagSelect, false]);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://v5hdg0fow7.execute-api.ap-northeast-2.amazonaws.com/Dev/pockets/test"
      )
      .then((res) => {
        setPosts(res.data.pockets);
        console.log(res.data.pockets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePoketClick = (poket) => {
    setPoket(poket);
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
          {/* <View style ={{backgroundColor:"pink", flex:1}}>
            {
                posts.map((post) => 
                  post.item_list.map((it, id) => 
                    (<Text key={id}>{it.item_id}</Text>)
                  )
                  )
            }
        </View> */}
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
              seasonValue={"spring"}
              onPress={handleSeasonClick}
              isSelected={season["spring"]["select"]}
            />
          </View>
          <View>
            <SeasonItem
              seasonValue={"summer"}
              onPress={handleSeasonClick}
              isSelected={season["summer"]["select"]}
            />
          </View>
          <View>
            <SeasonItem
              seasonValue={"fall"}
              onPress={handleSeasonClick}
              isSelected={season["fall"]["select"]}
            />
          </View>
          <View>
            <SeasonItem
              seasonValue={"winter"}
              onPress={handleSeasonClick}
              isSelected={season["winter"]["select"]}
            />
          </View>
        </View>
      </View>

      {/* 왜 샀지 태그 항목 */}
      <View style={styles.buyWhy}>
        <Text>왜 샀지</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={styles.tagContainer}>
            {tagData.map((item, index) => (
              <TagItem
                key={index}
                title={item.title}
                id={item.id}
                type={"default"}
                tagData={tagData}
                setTagData={setTagData}
                finalTagArray={finalTagArray}
                setFinalTagArray={setFinalTagArray}
                copyTagData={copyTagData}
                onCreateTag={onCreateTag}
              />
            ))}
          </View>
          <TagItem
            title={"태그 추가"}
            type={"adding"}
            text={text}
            setText={setText}
          />
          <Button title="추가하기" onPress={() => onCreateTag(text)} />
        </View>
      </View>

      {/* 메모 항목 */}
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

  buyWhy: {
    minHeight: 210,
    maxHeight: 400,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  buttonLayout: {
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 10,
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
