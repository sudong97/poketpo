{
  /* 계절 항목 */
}
<View style={styles.season}>
  <Text>계절</Text>
  <View style={styles.seasonImage}>
    <TouchableHighlight
      activeOpacity={0.9}
      style={styles.srping_touch}
      underlayColor="green"
      onPress={() => setSeason("spring")}
    >
      <Image
        style={styles.spring}
        source={require("poketpo2/assets/images/spring.png")}
      />
    </TouchableHighlight>
    <TouchableHighlight
      activeOpacity={0.9}
      style={styles.summer_touch}
      underlayColor="blue"
      onPress={() => setSeason("summer")}
    >
      <Image
        style={styles.summer}
        source={require("poketpo2/assets/images/summer.png")}
      />
    </TouchableHighlight>
    <TouchableHighlight
      activeOpacity={0.9}
      style={styles.fall_touch}
      underlayColor="orange"
      onPress={() => setSeason("fall")}
    >
      <Image
        style={styles.fall}
        source={require("poketpo2/assets/images/fall.png")}
      />
    </TouchableHighlight>
    <TouchableHighlight
      activeOpacity={0.9}
      style={styles.winter_touch}
      underlayColor="gray"
      onPress={() => setSeason("winter")}
    >
      <Image
        style={styles.winter}
        source={require("poketpo2/assets/images/winter.png")}
      />
    </TouchableHighlight>
  </View>
</View>;
