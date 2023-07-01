import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutPage from "../screens/About/AboutPage";

const Stack = createNativeStackNavigator();
const AboutScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="About" component={AboutPage} />
    </Stack.Navigator>
  );
};
export default AboutScreenNavigator;
