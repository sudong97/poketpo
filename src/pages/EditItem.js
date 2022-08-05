import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export const EditItem = ({ navigation }) => {
  return (
    <View style={styles.EditItemBox}>
      <View style={StyleSheet.Back}>
        <Button
          title="< 아이템 편집하기"
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
  EditItemBox: {
    paddingTop: 70,
    padding: 30,
    flex: 1,
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
  },
});
