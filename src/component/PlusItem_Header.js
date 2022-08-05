import { View, StyleSheet, Button, Text } from "react-native";
import { accessibilityProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const PlusItemHeader = ({ navigation }) => {
  return (
    <View style={styles.box}>
      <View style={styles.back_button}>
        <Button
          title="<"
          color="black"
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        />
      </View>
      <View style={styles.main}>
        <Text stlye={styles.maintxt}>아이템 등록하기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { flex: 1, flexDirection: "row", position: "relative" },
  back_button: { position: "absolute", zIndex: 50 },
  main: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlusItemHeader;
