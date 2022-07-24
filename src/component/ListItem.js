import { Image, StyleSheet, Text, View, Button } from "react-native";

export default function List({
  navigation,
  route,
  id,
  item_name,
  poket,
  memo,
  created_date,
  season,
}) {
  return (
    <View>
      <View key={id}>
        <Text>item 이름: {item_name}</Text>
        <Text>poket 이름: {poket}</Text>
        <Text>계절: {season}</Text>
        <Text>관련 메모: {memo}</Text>
        <Text>날짜: {new Date(created_date).toLocaleDateString()}</Text>
      </View>
    </View>
  );
}
