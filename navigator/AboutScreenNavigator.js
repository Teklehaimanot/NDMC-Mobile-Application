import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View,Text } from "react-native";

function About({navigation, route}) {
    return (     
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About NDMC</Text>
        <Text>Mobile</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator()
const AboutScreenNavigator = ()=>{
      return(
        <Stack.Navigator
        initialRouteName="About"
        screenOptions={{headerShown: false}}>
           <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      )
    }
export default AboutScreenNavigator