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
import React, { useState, useRef } from "react";

import PlusItemHeader from "../component/PlusItemHeader";
import PlusItem_Item from "../component/PlusItemItem";
import SeasonItem from "../component/SeasonItem";
import TagItem from "../component/TagItem";

export default function PlusItem({ onCreate, navigation }) {
  const [item_name, setItem_Name] = useState("");
  const [memo, setMemo] = React.useState("jisu good");
  const [season, setSeason] = useState("spring");
  const [select, setSelect] = useState([
    false, false, false, false, false, false, false, false, false, false,
  ])
  let copyArray = [...select]
  const [tagData, setTagData] = useState([
    {title: '입으면 완전 편해', id: 1}, 
    {title: '핏이 예뻐', id: 2},
    {title: '색이 찰떡', id: 3},
    {title: '필요해서', id: 4},
    {title: '세일 득템', id: 5},
    {title: '코디하기 좋아서', id: 6},
    {title: '휘뚜루마뚜루', id: 7},
    {title: '재질이 좋아서', id: 8},
    {title: '그냥', id: 9},
    {title: '유튜브 보고', id: 10}
  ])
  const [text, setText] = useState("")
  const tagDataId = useRef(tagData.length+1)

  const handleSeasonClick = (season) => {
    setSeason(season);
  };

  

  //포켓에 넣기 버튼
  const handlesubmit = () => {
    onCreate(item_name, memo, season);
    alert(memo);
    navigation.navigate("Home", { name: "Home" });
  };
  
  const onCreateTag = (title) => {
    const newTag = {title, id: tagDataId.current};
    tagDataId.current += 1;
    setTagData([...tagData, newTag]);
    setSelect([...select, false])
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.back}>
        <PlusItemHeader navigation={navigation} />
      </View>

      {/* 아이템 등록  */}
      <View>
        <PlusItem_Item item_name={item_name} setItem_Name={setItem_Name} />
      </View>

      {/* 포켓 선택 */}
      <View style={styles.poket}>
        <Text>포켓</Text>
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

      {/* 왜 샀지 태그 항목 */}
      <View style={styles.buyWhy}>
        <Text>왜 샀지</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={styles.tagContainer}>
          {tagData.map((item, index) => (
            <TagItem key={index} title={item.title} id={item.id} type={'default'} select={select} setSelect={setSelect} copyArray={copyArray} onCreateTag={onCreateTag}/>
          ))}
        </View>
        <TagItem title={'태그 추가'} type={'adding'} text={text} setText={setText}/>
        <Button title='추가하기' onPress={() => onCreateTag(text)}/>
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
    minHeight: 210,
    maxHeight: 400,
    backgroundColor: "white",
    borderRadius: 30,
    marginVertical: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  buttonLayout: {
    marginBottom: 10
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
