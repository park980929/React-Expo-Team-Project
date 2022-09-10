import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";

import NotiSchool from "../screens/Main/Notice/NotiSchool";
import NotiSystem from "../screens/Main/Notice/NotiSystem";

//공지사항 상단탭 네비게이션

const noticeTab = createMaterialTopTabNavigator();

function Notice() {
  return (
      <noticeTab.Navigator screenOptions={{ headerShown: true }}>
        <noticeTab.Screen name="NotiSchool" component={NotiSchool} />
        <noticeTab.Screen name="NotiSystem" component={NotiSystem} />
      </noticeTab.Navigator>

  );
}
export default Notice;
