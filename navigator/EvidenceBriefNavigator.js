import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"


function EvidenceBrief({navigation, route}) {
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Evidence Briefs</Text>
        </View>
      </SafeAreaView>
    );
  }

const Stack = createNativeStackNavigator()
const EvidenceBriefNavigator = ()=>{
    return(
        <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstPage" component={EvidenceBrief} />
      </Stack.Navigator>
    )
}

export default EvidenceBriefNavigator