import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../../color";
import ListItem from "../component/ListItem";
export default function List({ navigation, route, diaryList }) {
  useEffect(() => {
    axios
      .get(
        "https://v5hdg0fow7.execute-api.ap-northeast-2.amazonaws.com/Dev/pockets/test"
      )
      .then((response) => {
        setApi(response.data.pockets);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.txt}>
          <View style={styles.header}>
            <Text>아이템 리스트</Text>
          </View>
          <View style={styles.main}>
            <Text>총 {diaryList.length + 3}개의 아이템이 있습니다.</Text>
            <View>
              {api.map((post) => (
                <Text>{post.title}</Text>
              ))}
            </View>
            <View>
              {diaryList.map((it) => (
                <ListItem key={it.id} {...it} />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footbar}>
          <View style={styles.home_nav}>
            <Button
              title="Home"
              onPress={() => navigation.navigate("Home", { name: "Home" })}
            />
          </View>
          <View style={styles.list_nav}>
            <Button
              title="List"
              onPress={() => navigation.navigate("List", { name: "List" })}
            />
          </View>
          <View style={styles.plusitem_nav}>
            <Button
              title="PlusItem"
              onPress={() =>
                navigation.navigate("PlusItem", { name: "PlusItem" })
              }
            />
          </View>
          <View style={styles.setting_nav}>
            <Button
              title="Setting"
              onPress={() =>
                navigation.navigate("Setting", { name: "Setting" })
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    padding: 30,
    paddingTop: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txt: {
    height: 640,
  },
  header: { flex: 1, justifyContent: "center", alignItems: "center" },
  main: { flex: 5, justifyContent: "center", alignItems: "center" },
  footbar: {
    flex: 1.5,
    backgroundColor: "orange",
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  home_nav: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  home_txt: {
    color: theme.bg,
  },
  list_nav: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  list_txt: {
    color: theme.tc,
  },
  plusitem_nav: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  plusitem_txt: {
    color: theme.tc,
  },
  setting_nav: {
    flex: 1,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },
  setting_txt: {
    color: theme.tc,
  },
  camera: {
    flex: 1,
  },
});
