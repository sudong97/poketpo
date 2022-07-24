import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";

import OnBoarding from "./src/pages/OnBoarding";
import Home from "./src/pages/Home";
import List from "./src/pages/List";
import PlusItem from "./src/pages/PlusItem";
import Setting from "./src/pages/Setting";
import Backup from "./src/pages/Backup";
import EditHome from "./src/pages/EditHome";
import EditItem from "./src/pages/EditItem";
import EditPoket from "./src/pages/EditPoket";

export default function App() {
  const Stack = createNativeStackNavigator();

  const dataId = useRef(0);

  const [data, setData] = useState([]);
  const onCreate = (item_name, memo, season, poket) => {
    const created_date = new Date().getTime();
    const newItem = {
      item_name,
      memo,
      season,
      poket,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group screenOptions={{ headerStyle: { presentation: "modal" } }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="List"
            children={({ navigation }) => (
              <List diaryList={data} navigation={navigation} />
            )}
          />
          <Stack.Screen
            name="PlusItem"
            children={({ navigation }) => (
              <PlusItem onCreate={onCreate} navigation={navigation} />
            )}
          />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="EditHome" component={EditHome} />
          <Stack.Screen name="Backup" component={Backup} />
          <Stack.Screen name="EditItem" component={EditItem} />
          <Stack.Screen name="EditPoket" component={EditPoket} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
