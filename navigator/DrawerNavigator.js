import{createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/home/Home';
import { View,Text ,Dimensions} from 'react-native';
import { color } from '../utilities/Colors';


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

const { width } = Dimensions.get("window");
const Drawer = createDrawerNavigator();
const DrawerNavigator = (props)=>{
    return(
    <Drawer.Navigator initialRouteName="NDMC"
     screenOptions={{
      drawerStyle: {
        headerShown: false,
        backgroundColor: '#fff',
        width: width*4/5,
      },
      headerStyle: {
        backgroundColor: color.primary, //Set Header color
      },
      headerTintColor: color.white, //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    }}
    >
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