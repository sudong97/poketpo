import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";

const PoketSelect = ({ poket, onPress, isSelected }) => {
  return (
    <View
      style={[{ backgroundColor: "white" }, { opacity: isSelected ? 1 : 0.2 }]}
    >
      <TouchableOpacity
        onPress={() => onPress(poket)}
        style={[
          styles.poket,
          {
            backgroundColor:
              poket === "최애탬"
                ? `#FFD966`
                : poket === "고민고민"
                ? "#F4ABBA"
                : poket === "마요르카"
                ? "#97D6A7"
                : "white",
          },
        ]}
      >
        <Text style={{ fontWeight: "bold" }}>{poket}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PoketSelect;

const styles = StyleSheet.create({
  poket: {
    height: 40,
    marginBottom: 10,
    width: 250,
    marginLeft: "auto",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    opacity: 0.8,
  },
});
