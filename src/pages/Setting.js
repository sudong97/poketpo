import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../../color";

const Setting = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.txt}>
          <Text>hi</Text>
          <Text>hi</Text>
          <Text>hi</Text>
          <Text>hi</Text>
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
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txt: {
    flex: 13,
  },
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
});

export default Setting;
