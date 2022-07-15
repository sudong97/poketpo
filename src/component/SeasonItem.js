import { StatusBar } from "expo-status-bar";
import {
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

const SeasonItem = ({ season, onPress, isSelected }) => {
  const a = {
    spring: require("../../assets/images/spring.png"),
    summer: require("../../assets/images/summer.png"),
    fall: require("../../assets/images/fall.png"),
    winter: require("../../assets/images/winter.png"),
  };

  return (
    <TouchableOpacity onPress={() => onPress(season)}>
      <Image
        source={a[`${season}`]}
        style={[
          styles.season,
          { backgroundColor: isSelected ? `purple` : `white` },
        ]}
      />
    </TouchableOpacity>
  );
};

export default SeasonItem;

const styles = StyleSheet.create({
  season: { width: 50, height: 50, borderRadius: 10, margin: 10 },
});
