import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export const EditPoket = ({ navigation }) => {
  return (
    <View style={styles.EditPoketBox}>
      <View style={StyleSheet.Back}>
        <Button
          title="< 포켓꾸미기"
          color="black"
          onPress={() => navigation.navigate("PlusItem", { name: "PlusItem" })}
        />
      </View>
      <View style={styles.complete}>
        <Text>완료</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  EditPoketBox: {
    paddingTop: 70,
    padding: 30,
    flex: 1,
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
  },
});
