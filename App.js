import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item_txt}>
        <Text style={styles.item_num}>아이템 0</Text>
        <Text style={styles.item_month}>이번달 0</Text>
      </View>
      <View style={styles.item_box}>
        <View style={styles.item_box_top}>
          <View style={styles.item1}>
            <Image source={require("sideproject1/assets/images/item1.png")} />
          </View>
        </View>
        <View style={styles.item_box_bottom}>
          <View style={styles.item2}>
            <Image source={require("sideproject1/assets/images/item2.png")} />
          </View>
          <View style={styles.item3}>
            <Image source={require("sideproject1/assets/images/item3.png")} />
          </View>
        </View>
      </View>
      <View style={styles.footbar}>
        <View style={styles.home_nav}>
          <Image
            source={require("sideproject1/assets/images/ant-design_home-filled.png")}
          />
        </View>
        <View style={styles.list_nav}>
          <Image
            source={require("sideproject1/assets/images/foundation_list.png")}
          />
        </View>
        <View style={styles.setting_nav}>
          <Image
            source={require("sideproject1/assets/images/bxs_bar-chart-alt-2.png")}
          />
        </View>
        <View style={styles.addItem_nav}>
          <Image
            source={require("sideproject1/assets/images/akar-icons_circle-plus-fill.png")}
          />
        </View>
      </View>
      <StatusBar style={"black"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item_txt: {
    flex: 3,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  item_num: {
    marginTop: 20,
    fontSize: 48,
    fontWeight: "bold",
  },
  item_month: { fontSize: 24, fontWeight: "bold", marginTop: 20 },
  item_box: { flex: 10, backgroundColor: "green" },
  item_box_top: { flex: 6 },
  item1: { flex: 1, justifyContent: "center", alignItems: "center" },
  item_box_bottom: { flex: 4.5, flexDirection: "row" },
  item2: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  item3: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
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
  list_nav: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  setting_nav: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  addItem_nav: {
    flex: 1,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
  },
});
