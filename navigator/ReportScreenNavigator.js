import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

function Reports({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>NDMC Report</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const ReportScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Reports"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Reports" component={Reports} />
    </Stack.Navigator>
  );
};

export default ReportScreenNavigator;
