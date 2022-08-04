import { Image, StyleSheet, Text, View, Button } from "react-native";

export default function List({
  navigation,
  route,
  id,
  item_name,
  memo,
  created_date,
  finalSeasonArray,
  finalTagArray
}) {
  return (
    <View>
      <View key={id}>
        <Text>item 이름: {item_name}</Text>
        <Text>계절: {finalSeasonArray}</Text>
        <Text>태그: {finalTagArray.title}</Text>
        <Text>관련 메모: {memo}</Text>
        <Text>날짜: {new Date(created_date).toLocaleDateString()}</Text>
      </View>
    </View>
  );
}
