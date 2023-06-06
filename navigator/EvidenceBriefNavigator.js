import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EvidenceBrief from "../screens/evidenceBrief/EvidenceBrief";

const Stack = createNativeStackNavigator();
const EvidenceBriefNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="EvidencBrief"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="EvidenceBrief" component={EvidenceBrief} />
    </Stack.Navigator>
  );
};
export default EvidenceBriefNavigator;
