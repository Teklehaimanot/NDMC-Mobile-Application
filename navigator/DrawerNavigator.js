import{createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/home/Home';
import { View,Text } from 'react-native';


  function EvidenceBrief({navigation, route}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Evidence for Action</Text>
      </View>
    );
  }

  function Reports({navigation, route}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NDMC Report</Text>
      </View>
    );
  }

  function About({navigation, route}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About NDMC</Text>
      </View>
    );
  }


const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
    <Drawer.Navigator initialRouteName="NDMC">
      <Drawer.Screen
        name="NDMC"
        component={Home}
        options={{ drawerLabel: 'News And Events' }}
      />
      <Drawer.Screen
        name="Evidence For Action"
        component={EvidenceBrief}
        options={{ drawerLabel: 'Evidence For Action' }}
      />
      <Drawer.Screen
        name="Reports"
        component={Reports}
        options={{ drawerLabel: 'Reports' }}
      />
      <Drawer.Screen
        name="About"
        component={About}  
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
    )
}

export default DrawerNavigator