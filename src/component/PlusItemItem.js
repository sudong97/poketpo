import { Image, TextInput, View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

const PlusItem_Item = ({ item_name, setItem_Name }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default PlusItem_Item;
